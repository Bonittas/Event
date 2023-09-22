import './App.css';

import Home from './components/Admin';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from './components/Header';
import Sugga from './components/Sugga';
import Sugg from './components/Sugg';

function App() {
  return (
    <>
  
      <Routes>
      <Route path='/sugga' element={<Sugga />} />    
      <Route path='/sugg' element={<Sugg />} />
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/header' element={<Header />}/>
        
 
      </Routes>
      
      
    </>
  );
}

export default App;
