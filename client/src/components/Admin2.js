import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import moment from "moment"
import Alert from 'react-bootstrap/Alert';
import "../index.css"

import Header from './Header';
import SuggAdin from './s/Suggdin';

const Admin2 = () => {
  
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


    const dltUser = async (id) => {
        console.log(id)
        const res = await axios.delete(`/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.data.status == 201) {
            getUserData()
            setShow(true)
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
      <button><a href='/suggadin'>Adminsugg</a></button>
          <div class="containers">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter"> View eventsssss,  Add your events,  Enjoy moments</h3>
    </div>
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
                                     
  <a className="Eimage" > <img id="ro" src={`/uploads/${el.userimg}`} height={200} width={262}/></a>
  
<div className='container'>

  <div className="discription">
         
              <p className="mytitle">Description : {el.username}</p></div>
              <div className="add-img">
      <div className="del">
          <button type="button" id='del'  onClick={() => dltUser(el.id)}>
          Delete
              <span className="list"></span>
          </button>
      </div>
  </div>
      </div>
     
 </section>
                                </>
                            )
                        }) : ""
                    }

                </div>
            </div>
        </>
    )
}

export default Admin2