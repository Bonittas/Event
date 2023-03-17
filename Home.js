import { useEffect, useState } from "react";
import Body from "./Body";
import Rophnan from "./Rophnan.png";
import baz from "./baz.png";
import theatre from "./theatre.png";
import Exhib from "./Exhib.png";
import lm from "./lm.png";

const Home = () => {
  const [events, setevents] = useState(null);
  return (

  <>
  <div className="nav">
  <a href="">Home</a>
    <a href="">About-us</a>
    <a href="">Contact-us</a>
  </div>
  <p>Ethio-Events</p>
  <section className="Events">
  <a className="product-image" href="Rophnan.png"> <img id="ro" src={Rophnan}height={200} width={200}/></a>
  
      <div className="discription">
          <div className="body">
              <p className="title">Concert</p>
          </div>
      </div>
      <div className="inner_title">By : DJ. Rophnan<br></br>
      Address : Millinium Hall<br></br>
      Date and Time : Janunary 14 Saturday Satrting from 6PM</div>

  <div className="add-to-cart-button">
      <div className="form-ctrl">
          <button type="button">
              <span className="list">More</span>
          </button>
      </div>
  </div>
</section>

<section className="Events">
  <a className="product-image" href="Rophnan.png"> <img id="ro" src={Exhib}height={200} width={200}/></a>
  
      <div className="discription">
          <div className="body">
              <p className="title">Exhibition</p>
          </div>
      </div>
      <div className="inner_title">
      Address : Ethiopian National Museum<br></br>
      Date and Time : April 5-10 Monday-Saturday<br></br> Openning time 9AM-2AM</div>

  <div className="add-to-cart-button">
      <div className="form-ctrl">
          <button type="button">
              <span className="list">More</span>
          </button>
      </div>
  </div>
</section>
<section className="Events">
  <a className="product-image" href="Rophnan.png"> <img id="ro" src={baz}height={200} width={200}/></a>
  
      <div className="discription">
          <div className="body">
              <p className="title">Bazzar</p>
          </div>
      </div>
      <div className="inner_title">
      Address : MERKATO<br></br>
      Date and Time : March 25 Saturday<br></br> Opening time : 8AM
      <br></br>Closing time : 6AM</div>

  <div className="add-to-cart-button">
      <div className="form-ctrl">
          <button type="button">
              <span className="list">More</span>
          </button>
      </div>
  </div>
</section>
<section className="Events">
  <a className="product-image" href="Rophnan.png"> <img id="ro" src={theatre}height={200} width={200}/></a>
  
      <div className="discription">
          <div className="body">
              <p className="title">Theatre</p>
          </div>
      </div>
      <div className="inner_title"><br></br>
      Address : Biherawi Theatre<br></br>
      Date and Time : April 1 Tuesday Starting from 6PM-2PM</div>

  <div className="add-to-cart-button">
      <div className="form-ctrl">
          <button type="button">
              <span className="list">More</span>
          </button>
      </div>
  </div>
</section>


    <div className="home" >

      {events && <Body events={events}  {...<img src={require("./logo.svg").default}/>}/>}
      
    </div></>
  );
}
 
export default Home;