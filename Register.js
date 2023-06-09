import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import {useNavigate} from "react-router-dom";
import Header from './Header';
// import logo from './logo.svg'
const Register = () => {

    const [fname,setFName] = useState("");
    const [file,setFile] = useState("");

    const history = useNavigate();

    const setdata = (e)=>{
        setFName(e.target.value)
    }

    const setimgfile = (e)=>{
        setFile(e.target.files[0])
    }

    const addUserData = async(e)=>{
        e.preventDefault();

        var formData = new FormData();
        formData.append("photo",file)
        formData.append("fname",fname);
        console.log(formData)
        const config = {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }

        const res = await axios.post("/register",formData,config);
       
        if(res.data.status == 201){
            history("/")
        }else{
            console.log("error")
        }
    }

    return (
        <><Header/>
            <div className='container mt-3'>
                <h1>Upload Your Img Here</h1>
               

  
     
    
                <Form>
                    <div className="mb-3" controlId="formBasicEmail">
                        <p className='title'>Description</p>
                        <textarea type="text" name='fname' onChange={setdata} />
                    </div>

                    <div className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Select Your Image</Form.Label>
                        <Form.Control type="file" name='photo' onChange={setimgfile} />
                    </div>
                    <Button variant="primary" type="submit" onClick={addUserData}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default Register;