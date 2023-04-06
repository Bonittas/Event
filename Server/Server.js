const express = require("express");
const multer=require("multer");
const mysql = require('mysql');
const { check, validationResult } = require('express-validator');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({    
    host: "localhost",    
    user: "root",    
    password: "",   
     database: "signup"})

app.post('/signup', (req, res) => {    
    const sql = "INSERT INTO login(name,email,password) VALUES (?)";    
    const values = [        
        req.body.name,        
        req.body.email,        
        req.body.password    ]    
db.query(sql, [values], (err, data) => {        
    if(err) {            
        return res.json("Error");        
    }        
    return res.json(data);    
})})
app.post('/login',[    
    check('email', "Emaill length error").isEmail().isLength({min: 10, max:30}),    
    check('password', "password length 8-10").isLength({min: 8, max: 10})], (req, res) => {    
        const sql = "SELECT * FROM login WHERE email = ? AND password = ?";  
        db.query(sql, [req.body.email,req.body.password ], 
            (err, data) => {
        const errors = validationResult(req);        
        if(!errors.isEmpty()) {            
            return res.json(errors);        
        } else {            
            if(err) {                
                return res.json("Error");            
            }            
            if(data.length > 0) {                
                return res.json("Success");            
            } else {                
                return res.json("Faile");            
            }        
        }            
        })})
//         //Suggestion
//         var imgconfig = multer.diskStorage({
//             destination:(req,file,callback)=>{
//                 callback(null,"./uploads");
//             },
//             filename:(req,file,callback)=>{
//                 callback(null,`image-${Date.now()}.${file.originalname}`)
//             }
//         });
        
        
//         // img filter
//         const isImage = (req,file,callback)=>{
//             if(file.mimetype.startsWith("image")){
//                 callback(null,true)
//             }else{
//                 callback(null,Error("only image is allowd"))
//             }
//         }
        
//         var upload = multer({
//             storage:imgconfig,
//             fileFilter:isImage
//         })
//         app.post("/suggadin",upload.single("photo"),(req,res)=>{
//             const {fname} = req.body;
//             const {filename} = req.file;
        
//           console.log(req.body)
//             if(!fname || !filename){
//                 res.status(422).json({status:422,message:"fill all the details"})
//             }
            
//             try {
                
//                 let date = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
                
//                 db.query("INSERT INTO suggestion SET ?",{username:fname,userimg:filename},(err,result)=>{
//                     if(err){
//                         console.log("error")
//                     }else{
//                         console.log("data added")
//                         res.status(201).json({status:201,data:req.body})
//                     }
//                 })
//             } catch (error) {
//                 res.status(422).json({status:422,error})
//             }
//         });
              
        
//         // get user data
//         app.get("/getdata",(req,res)=>{
//             try {
//                 conn.query("SELECT * FROM suggestion",(err,result)=>{
//                     if(err){
//                         console.log("error")
//                     }else{
//                         console.log("data get")
//                         res.status(201).json({status:201,data:result})
//                     }
//                 })
//             } catch (error) {
//                 res.status(422).json({status:422,error})
//             }
//         });
        
        
//         // delete user
//         app.delete("/:id",(req,res)=>{
//             const {id} = req.params;
//            try {
//             conn.query(`DELETE FROM suggestion WHERE id ='${id}'`,(err,result)=>{
//                 if(err){
//                     console.log("error")
//                 }else{
//                     console.log("data delete")
//                     res.status(201).json({status:201,data:result})
//                 }
//             })
//            } catch (error) {
//             res.status(422).json({status:422,error})
//            }
//         })
        
        
app.listen(8081, ()=> {    console.log("listening");})