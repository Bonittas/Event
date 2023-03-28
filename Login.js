import axios from "axios";
import { useState } from "react";
import React from "react";
import Header from "./Header";
function Login(){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState ("");
  
  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    axios.post("http://localhost:3001/login", {
       username: username,
       password: password,
    }).then((response) => {
       if (!response.data.message) {
          setLoginStatus( response.data.message);
       } else {
          setLoginStatus (response.data[0].message);
       }
    });
    };
    return(
        <>
        <Header/>
       <form>
      <label>Enter your name:
        <input type="text" width={80} className="inpout" 
         onChange = { (e) => {
          setUsername (e.target.value);}}/>
      </label>
      <label>Enter password:
        <input type="text" width={80} className="inpout"   onChange = { (e) => {
          setPassword (e.target.value);}} />
      </label>
      <button type="button" className="btn"><a href="/">Login</a></button>
    </form>
      
     
        </>
    )
}
export default Login;