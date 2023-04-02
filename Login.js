import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Validation from "./LoginValidation";
import '../index.css'
function Login() {    
    const [values, setValues] = useState({       
         email: '',       
          password: ''    })   
           const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const [backendError, setBackendError] = useState([])
    const handleInput = (event) => {  
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))    }   
     const handleSubmit =(event) => {       
         event.preventDefault();       
          setErrors(Validation(values));        
          if(errors.email === "" && errors.password === "") 
          {            
            axios.post('http://localhost:8081/login', values)           
           .then(res => {                
            if(res.data.errors) {                   
             setBackendError(res.data.errors);                
            } else {                    
                setBackendError([]);                    
                if(res.data === "Success") {                        
                    navigate('/');                    
                } else {                        
                    alert("No record existed");                    
                }                
            }                            
        })            
        .catch(err => console.log(err));        
    }    
}
  return (    <div className='login'>        
  <div className='log'>           
          
   {                
   backendError ? backendError.map( e => (                    
   <p className='text-danger'>{e.msg}</p>                 
   )) : <span></span>            
   }            
   <form action="" onSubmit={handleSubmit}>               
    <div className='mb-3'>                    
    <label htmlFor="email"><strong>Email</strong></label>                   
     <input type="email" placeholder='Enter Email' name='email'                    
     onChange={handleInput} className='form-control rounded-0'/>                   
      {errors.email && <span className='text-danger'> {errors.email}</span>}                
      </div>                <div className='mb-3'>                    
      <label htmlFor="password"><strong>Password</strong></label>                   
       <input type="password" placeholder='Enter Password' name='password'                   
        onChange={handleInput} className='form-control rounded-0'/>                    
        {errors.password && <span className='text-danger'> {errors.password}</span>}                
        </div>                <button type='submit' className='btn1'> Log in</button>               
         <p>You are agree to aour terms and policies</p>               
          <Link to="/signup" className='btn2'>Create Account</Link>            
          </form>        
          </div>    
          </div>  )}
export default Login;
