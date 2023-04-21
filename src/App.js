import React from 'react'
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register  from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
        <Route path='/ResetPassword/:token' element={<ResetPassword/>}/>
      </Routes>
      <Footer/>
     </Router>
  );
}

export default App;
