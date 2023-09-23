
  const insertUserData = (userData, callback) => {
    pool.query('INSERT INTO usersdata SET ?', userData, callback);
  };
 
  const getUserData = (callback) => {
    pool.query('SELECT * FROM usersdata', callback);
  };
  const deleteUserData = (id, callback) => {
    pool.query('DELETE FROM usersdata WHERE id = ?', [id], callback);
  };
  
  module.exports = {
    insertUserData,
    getUserData,
    deleteUserData,
  };