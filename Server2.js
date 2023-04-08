const express = require("express");
const router = new express.Router();
const co = require("../db/co");
const multer = require("multer");
const moment = require("moment")
const { check, validationResult } = require('express-validator');
const mysql = require('mysql');
const cors = require('cors');


// img storage confing
var imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads");
    },
    imgfname:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }
});


// img filter
const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(null,Error("only image is allowd"))
    }
}

var upload = multer({
    storage:imgconfig,
    fileFilter:isImage
})



// register userdata
// app.post("/signup", upload.single("text"),(req,res)=>{
//     const {username} = req.body.username;
//     const {email} = req.file.email;
//     const {password} = req.file.password;
//     const {cpassword}=req.file.cpassword;


//   console.log(req.body)
//     if(!username || !email || !password || !cpassword){
//         res.status(422).json({status:422,message:"fill all the details"})
//     }
    
//     try {
  
        
//        co.query("INSERT INTO signupp SET ?",{usernames:username,emails:email,passwords:password,cpasswords:password},(err,result)=>{
//             if(err){
//                 console.log("error")
//             }else{
//                 console.log("data is added")
//                 res.status(201).json({status:201,data:req.body})
//             }
//         })
//     } catch (error) {
//         res.status(422).json({status:422,error})
//     }
// });
// const express = require("express");







// router.post("/signup", (req, res)=> {
 
//     const username = req.body.username;
//     const email = req.body.email;
//     const cpassword = req.body.cpassword;
//     const password = req.body.password;
  

//  });
// login
// app.post('/login', (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
    
//     db.execute(
//         "SELECT * FROM users WHERE username = ? AND password = ?",
//         [username, password],
//         (err, result)=> {
//             if (err) {
//                 res.send({err: err});
//             }
    
//             if (result.length > 0) {
//                 res.send( result);
//                 }else({message: "Wrong username/password comination!"});
//             }
        
//     );
//    });


router.post("/suggadin",upload.single("img"),(req,res)=>{
    const {title} = req.body;
    const {imgfname} = req.file;

  console.log(req.body)
    if(!title || !imgfname){
        res.status(422).json({status:422,message:"fill all the details"})
    }
    
    try {
        
        let date = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
        
       co.query("INSERT INTO usersdata SET ?",{username:title,userimg:imgfname,date:date},(err,result)=>{
            if(err){
                console.log("error")
            }else{
                console.log("data added")
                res.status(201).json({status:201,data:req.body})
            }
        })
    } catch (error) {
        res.status(422).json({status:422,error})
    }
});


// get user data
router.get("/getdata",(req,res)=>{
    try {
       co.query("SELECT * FROM usersdata",(err,result)=>{
            if(err){
                console.log("error")
            }else{
                console.log("data get")
                res.status(201).json({status:201,data:result})
            }
        })
    } catch (error) {
        res.status(422).json({status:422,error})
    }
});


// delete user
router.delete("/:id",(req,res)=>{
    const {id} = req.params;
   try {
   co.query(`DELETE FROM usersdata WHERE id ='${id}'`,(err,result)=>{
        if(err){
            console.log("error")
        }else{
            console.log("data delete")
            res.status(201).json({status:201,data:result})
        }
    })
   } catch (error) {
    res.status(422).json({status:422,error})
   }
})



module.exports = router;
require("dotenv").config();
// const express = require("express");
const app = express();
require("../db/co");
// const cors = require("Server2/Server2")
// const port = 9000;


app.use(express.json());
app.use(cors());

app.use("/uploads",express.static("./uploads"))
app.use(router)

app.listen(9000,()=>{
    console.log("server start")
})