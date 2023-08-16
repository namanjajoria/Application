import React from 'react'
import { useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Comp.css';
function Add() {
  const [input,setInput]=useState({Name:"",Age:"",Email:""});
  const navigate=useNavigate();
  const handleChange=(e,type)=>{
    if(type==='name'){
      setInput((pre)=>{
        return{...pre,Name:e.target.value};
      })
    }
    else if(type==='age'){
      setInput((pre)=>{
        return{...pre,Age:e.target.value};
      })
    }
    else if(type==='email'){
      setInput((pre)=>{
        return{...pre,Email:e.target.value};
      })
    }
  }
  const handleClick=()=>{
    const url=`https://641d322b1a68dc9e4618d8d4.mockapi.io/naman`;
    if(input.Name==='' || input.Age==='' || input.Email===''){
      alert("Please Enter All Fields");
    }
    else{
      axios.post(url,input)
      .then(()=>{
        navigate('/');
      })
      setInput((pre)=>{
        return {...pre,Name:'',Age:'',Email:''};
      })
    }
    
  }
  return (
    <div>
    <div className='row bg-primary box1 d-flex align-items-center'>
    
      <div className='col-sm-12 col-md-4'></div>
      <div className='col-sm-12 col-md-4 bg-light box2 pt-5 ps-5'>
      <h1 className='text-primary text-center mb-4'>Add Details</h1>
        <h3 className='mb-3'>Name:</h3>
        <input type={'text'} placeholder='Enter Name' className='w-75 mb-3  input' onChange={(e)=>handleChange(e,'name')}></input>
        <h3 className='mb-3'>Age:</h3>
        <input type={'number'} placeholder='Enter Age ' className='w-75 mb-3 input' onChange={(e)=>handleChange(e,'age')}></input>
        <h3 className='mb-3'>Email:</h3>
        <input type={'email'} placeholder='Enter Email' className='w-75 mb-5 input' onChange={(e)=>handleChange(e,'email')}></input><br></br>
        <center>
          <button type={'button'} className='btn btn-primary w-25 mt-4 ps-2  me-3 pe-2' onClick={handleClick}>Submit</button>
          <NavLink to={'/'} >
          <button type={'button'} className='btn btn-info w-25 mt-4 ps-2 pe-2'>Back</button>
          </NavLink>
        </center>
      </div>
      <div className='col-sm-12 col-md-4'></div>
    </div>
    
    </div>
  )
}

export default Add
