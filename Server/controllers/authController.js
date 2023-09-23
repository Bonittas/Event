const { check, validationResult } = require('express-validator');
const pool = require('../server');

// User signup
const signup = (req, res) => {
  const sql = "INSERT INTO login(name,email,password) VALUES (?)";
  const values = [
    [req.body.name, req.body.email, req.body.password]
  ];
  pool.query(sql, values, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
};

// User login
const login = [
  check('email', "Email length error").isEmail().isLength({ min: 10, max: 30 }),
  check('password', "Password length 8-10").isLength({ min: 8, max: 10 }),
  (req, res) => {
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    const values = [req.body.email, req.body.password];
    pool.query(sql, values,
      (err, data) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.json(errors);
        } else {
          if (err) {
            return res.json("Error");
          }
          if (data.length > 0) {
            return res.json("Success");
          } else {
            return res.json("Fail");
          }
        }
      });
  }
];

module.exports = {
  signup,
  login
};