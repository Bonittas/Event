import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
// import { NavLink } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import moment from "moment"
import Alert from 'react-bootstrap/Alert';
import "../index.css"
import run4 from './run4.png'
import concert from './concert1.png'
import Admin from './Admin';
import Footer from './Footer';


import Header from './Header';

const Home = () => {
  
    const [data, setData] = useState([]);

    const [show, setShow] = useState(false);

    const getUserData = async () => {
        const res = await axios.get("/getdata", {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.data.status == 201) {
            console.log("data get");
            setData(res.data.data)

        } else {
            console.log("error")
        }
    }


   

    useEffect(() => {
        getUserData()
    }, [])

    return (
         
        <>

          <Header/>
          
          <div class="containers">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter"> View events,  Add your events,  Enjoy moments</h3>
    </div>
  </div>
</div>
<div className='container'>
    <div className='wrapper'>
   
  
   </div>
</div>
            {
                show ? <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    {/* User Delete */}
                </Alert> : ""
            }
            <div className="container1">
              
                <div className='text2'>
                    {
                        data.length > 0 ? data.map((el, i) => {
                          
                            return (
                                
                                <>

                                     <section className="Events">
                                        
                                     
  <a className="Eimage" > <img id="ro" src={`/up/${el.userimg}`} height={200} width={358}/></a>

<div className='container'>

  <div className="discription">
         
              <p className="mytitle">Description : {el.username}</p></div>
            

      </div>
     
 </section>
                                </>
                            )
                        }) : ""
                    }

                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home