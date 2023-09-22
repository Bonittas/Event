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
    const setimgfile = (e)=>      {
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
                
               

  
     
    
                <Form>
              
    <div class="containers">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="event-add">  Add your events Here</h3>
    </div>
  </div>
</div>
                   <div className='upload'>
                    <div className="mb-3" controlId="formBasicEmail">
                      
                        <textarea type="text" placeholder='Enter Description' name='fname' className='space' onChange={setdata} />
                        
                    </div>
                    
                    <div className="mb-3" controlId="formBasicPassword">
                        <Form.Label><p className='select'>Select Your Image</p></Form.Label>
                        <Form.Control type="file" className='setimg' name='photo' onChange={setimgfile} />
                    </div>
                    <Button className='submit' type="submit" onClick={addUserData}>
                        Submit
                    </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default Register;