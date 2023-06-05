import { useState } from "react"
import React from 'react'
// import { Outlet } from 'react-router-dom'
export default function TextForm(props) {
    const handleuppercase=()=>{
        // console.log("page is not reload" + text);
        let newText =text.toUpperCase();
        settext(newText);
       
    }
    const handlelowercase=()=>{
      // console.log("page is not reload" + text);
      let newText =text.toLowerCase();
      settext(newText);
     
  }
  const handleclear=()=>{
    // console.log("page is not reload" + text);
    
    let newText ="";
    settext(newText);
   
}
const removeSpace =()=>{

let newText = text.split(/[ ]+/)
settext(newText.join(" "));


}
    const handleOnChange=(event)=>
    {
        // console.log("onChange");
        settext(event.target.value);
     
    }
   const [text,settext]=useState('');
  return (
<>
    <div className="container" >

<div className="mb-3" style={{color:(props.mode ==="light")? 'black' :' white' }}>
  <label htmlFor="myBox" className="form-label " ><h1>{props.heading}</h1></label>
  <textarea className="form-control" id="myId" value={text}rows="8" onChange={handleOnChange} style={{backgroundColor:(props.mode ==="light")? 'white' :' rgb(38, 41, 68)' ,color:(props.mode ==="light")? 'black' :' white'}}></textarea>
</div>
<button type="button" className="btn btn-info mx-2" onClick={handleuppercase}> click to convert uppercase</button>
<button type="button" className="btn btn-info mx-2" onClick={handlelowercase}> click to convert lowercase</button>
<button type="button" className="btn btn-info mx-2" onClick={handleclear}> clear text</button>
<button type="button" className="btn btn-info mx-2" onClick={removeSpace}> remove space</button>



    </div>
    <div className="container my-3"  style={{color:(props.mode ==="light")? 'black' :' white' }}>
    <h2> your text summary </h2> 
    <p> {text.split(" ").length} word and {text.length} characters</p>
    <p> <b>{0.008*(text.split(" ").length)} </b> minutes read</p>
    <h3> preview</h3>
    <p>{text.length>0 ? text : "enter your text"}</p>
    </div>
 {/* <Outlet/> */}
    </>
  )
}
