// import logo from './logo.svg';
// import './App.css';
import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
 import About from './About';
 import Error from './Error';

 import TextForm from './TextForm';
 import { useState } from 'react';
 import {
  BrowserRouter ,
 Routes,
  Route,
 
} from "react-router-dom";

 function App() {

 const [mode,setmode]= useState('dark');
 const toggle =()=>{
  if(mode === 'light')
  {
    setmode('dark');
    document.body.style.background='rgb(38, 41, 68) ';
   
  }
  else{
    setmode('light');
    document.body.style.background='white';
    
  }
  

 }

    return (
    <>

  
<BrowserRouter>
  
<Routes>
<Route path="/" element={
<Navbar about="About " mode={mode} togglemode={toggle} />}>



        




<Route path="home" element={
<TextForm heading="enter the text to analyze"  mode={mode} />  }
          
        / >
          
          <Route path="about" element={<About/>}/>

          
      
<Route path="*" element={<Error/>}/>
  </Route>

          </Routes>
</BrowserRouter>
   </>
   
  );
}

export default App;
