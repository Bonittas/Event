import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tailwindcss/tailwind.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Header from './components/Header';
import Header2 from './components/Header2';
import Header3 from './components/Header3';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Footer from './components/Footer';
import Register from './pages/Register';
import Addsugg from './pages/Addsugg';
import Suggestion from './pages/Suggestion';
import Contact from './pages/Contact';
import About from './pages/About';
import Events from './pages/Events';

import Catagories from './pages/Catagories';

export default function App() {

  return (
  
    <BrowserRouter>  <list/>
    <Routes>
    <Route path="/admin" element={<Admin />} />
   
   
      <Route path="/header" element={<Header />}/>
      <Route path="/header2" element={<Header2 />}/>
      <Route path="/header3" element={<Header3 />}/>

        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/catagories' element={<Catagories />}/>
        <Route path='/suggestion' element={<Suggestion />} />
        <Route path='/addsugg' element={<Addsugg />} />
        <Route path='/events' element={<Events />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/footer" element={<Footer/>}/>
     
   
    </Routes>
  
  </BrowserRouter>
  );}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
