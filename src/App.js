import './App.css';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import { Routes, Route, Outlet, Link, Router } from "react-router-dom";




function App() {

  
 
  return (

   
    <div className="App">
     
    <nav>
        <h2 className='header'>Social-App</h2>
          <ul>
            <li className='home'>
              <Link to="/">Home</Link>
            </li>
            <li className='login'>
              <Link to="/login">Login</Link>
            </li>
            <li className='signup'>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signUp" element={<SignUp />}/>
        </Routes>
       

        
      </div>
    
  );
}

export default App;