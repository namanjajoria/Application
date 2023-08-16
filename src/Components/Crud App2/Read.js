import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './Comp.css'
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';
import './Comp.css'
// export let apidata=createContext();
function Read() {
  const [data,setData]=useState([]);
  const url=`https://641d322b1a68dc9e4618d8d4.mockapi.io/naman`;
  const A=()=>{
    axios.get(url)
    .then((res)=>{
      setData(res.data);
      // console.log(data);
      console.log(res.data);
    }).catch((error)=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    A();
  })

  const handleDelete=(id)=>{
    const urll=`https://641d322b1a68dc9e4618d8d4.mockapi.io/naman/${id}`;
    axios.delete(urll)
    .then((res)=>{
      A();
    })
  }

  const handleChange=(id,Name,Age,Email)=>{
    localStorage.setItem("id",id);
    localStorage.setItem("Name",Name);
    localStorage.setItem("Age",Age);
    localStorage.setItem("Email",Email);
  }
  return (
    <div>
   
    <h1 className='text-center text-info bg-dark'>CRUD APPLICATION</h1>
    <div className='table-container'>
    <Table responsive striped variant='dark' hover className='table' cellSpacing={2}>
    <thead>
    
      <tr>
        <th style={{textAlign:'center'}}>Full Name</th>
        <th style={{textAlign:'center'}}>Age</th>
        <th style={{textAlign:'center'}}>Email</th>
        <th style={{textAlign:'center'}}>Actions</th>
      </tr>
    </thead>
    
    <tbody>

{data.map((e)=>{
     return  <tr key={e.id}>

        <td align='center'>{e.Name}</td>
        <td align='center'>{e.Age}</td>
        <td align='center'>{e.Email}</td>
        <td  align='center'>
        <NavLink to={'/update'}>
        <button className='btn btn-success me-2 button' type={'button'} onClick={()=>handleChange(e.id,e.Name,e.Age,e.Email)}>Update</button>
        </NavLink>
        <button className='btn btn-danger button' type={'button'} onClick={()=>handleDelete(e.id)}>Delete</button>
        </td>
      
      </tr>  
    })}
   
  </tbody>
  </Table>
  </div>
  
 <NavLink to={'/add'}>
  <center><button type={'button'} className='btn btn-primary ps-4 pe-4 pt-2 mt-3 pb-2'>Add Details</button></center>
  </NavLink>
  
  </div>
  )
}

export default Read
