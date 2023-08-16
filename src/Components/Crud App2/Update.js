import React from 'react'
import { useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './Comp.css';
function Update() {
  const [input,setInput]=useState({Name:"",Age:"",Email:""});
  const [id,setId]=useState('');
  const navigate2=useNavigate();
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
  useEffect(()=>{
    setId(localStorage.getItem("id"));
   setInput((pre)=>{
    return {...pre,Name:localStorage.getItem("Name"),Age:localStorage.getItem("Age"),Email:localStorage.getItem("Email")};
   })
  },[])

  const handleUpdate=(e)=>{
    e.preventDefault();
    if(input.Name==="" || input.Age===""|| input.Email===""){
         alert("Please enter all fields");
        }
        else{
    const urlll=`https://641d322b1a68dc9e4618d8d4.mockapi.io/naman/${id}`;
        axios.put(urlll,input)
        .then(()=>{
          navigate2('/');
        });
      }
  }

  return (
    <div className='row box3 d-flex align-items-center'>
    
      <div className='col-sm-12 col-md-4'></div>
      <div className='col-sm-12 col-md-4 box2 bg-light pt-5 ps-5'>
      <h1 className='text-success text-center mb-4'>Update Details</h1>
        <h3 className='mb-3'>Name:</h3>
        <input type={'text'} placeholder='Enter Name' className='w-75 mb-3  input' value={input.Name} onChange={(e)=>handleChange(e,'name')}></input>
        <h3 className='mb-3'>Age:</h3>
        <input type={'number'} placeholder='Enter Age' value={input.Age} className='w-75 mb-3 input' onChange={(e)=>handleChange(e,'age')}></input>
        <h3 className='mb-3'>Email:</h3>
        <input type={'email'} placeholder='Enter Email' value={input.Email} className='w-75 mb-5 input' onChange={(e)=>handleChange(e,'email')}></input><br></br>
        <center>
          
          <button type={'button'} className='btn btn-success w-25 mt-4 ps-2  me-3 pe-2' onClick={handleUpdate}>Update</button>
          <NavLink to={'/'} >
          <button type={'button'} className='btn btn-info w-25 mt-4 ps-2 pe-2'>Back</button>
          </NavLink>
        </center>
      </div>
      <div className='col-sm-12 col-md-4'></div>
    </div>
  )
}

export default Update
