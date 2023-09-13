import './App.css';
import 'tailwindcss/tailwind.css'

import Home from './components/Admin';
import Register from './components/Register';
import { Route,Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from './components/Header';
import Addsugg from './components/Addsugg';
import Suggestion from './components/Suggestion';


function App() {
  return (
    <>
  
      <Routes>
 
        <Route path='/home' element={<Home />} />
        <Route path='/suggestion' element={<Suggestion />} />
        <Route path='/addsugg' element={<Addsugg />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/header' element={<Header />}/>
        
 
      </Routes>
      
      
    </>
  );
}

export default App;
