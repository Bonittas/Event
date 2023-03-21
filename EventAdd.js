import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import {useNavigate} from 'react-router-dom'
function EventAdd() {
   const navigate=useNavigate()
    const [title, setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [image, setImage ]= React.useState("");
    console.log(image,12)

useEffect(()=>{
   if (!localStorage.getItem('token')){
      navigate('/home')
   }},[])
const handleChange =(e)=>{(setTitle (e.target.value));
}
const handleChangeDesc =(e)=>{(setDesc (e.target.value));
}
const handleClick = ()=>{
   console.log(title,desc,19)
   axios.post("http:/localhost::5000/api/home",
   {
      title:title,
      description:desc,
   },
    {headers:{'Authorization':localStorage.getItem('token')}
   })
 .then((res)=>{
   console.log(res.data)
if(res.data.code=== 403 && res.data.message ==='Token Expired'){
   localStorage.setItem('token',null)
}
})
.catch(err=>{
   console.log(err,"err" )
})
}
return( 

   <div className="forms">
<input type=" text" value={title} onChange={ handleChange} placeholder='title' className="input">Enter Title</input>
<input type="text" value={desc} onChange={ handleChangeDesc} placeholder='Description' className="input">Enter Title</input>
<input  value={title} onChange={ (e)=>setImage(e.target.files[0])} type="file" />
<button onClick={handleClick} className="add-btn">Add Event</button>   
   </div> )
} 
export default EventAdd;