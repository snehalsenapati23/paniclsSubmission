import '../styles/Form .css'
import React, { useState } from 'react';
import {useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';


const Form = () => {
  const navigate=useNavigate();
  const [userDetails,setUserDetails]=useState({
    fullname:"",
    age:"",
    gender:"",
    email:""
  });
  // const [record,setRecords]=useState([])

  const handleInput=(e)=>{
       const name=e.target.name;
       const value=e.target.value;

       setUserDetails({...userDetails,[name]:value})

  }
  // const handleSubmit=(e)=>{
 
          
  //   // const newRecord={...userDetails}
  //   // setRecords([...record,newRecord])
  // }
  const {register,formState:{errors}, handleSubmit}=useForm();
  const onSubmit=(data)=>console.log(data);
  return (
    <>
        <div className="card">
          <form onSubmit={handleSubmit(onSubmit)} 
          >
            <div>
              <h1>User Details</h1>
            </div>
          <div>
          <label>Full Name</label>
            <input placeholder='Enter Person name..' {...register("name",{required:true})}
            onChange={handleInput} autoComplete='off'
            name='fullname' id='fullname'
            value={userDetails.fullname}
          />
            <error>
              {
                errors.name?.type==="required" && "Name is Required"
              }
            </error>
          </div>
          <div>
            <label>Age</label>
            <input placeholder='Enter age...' {...register("age",{required:true})} onChange={handleInput} autoComplete='off'
              name='age'
              id='age'
            value={userDetails.age} />
            <error>
              {
                errors.age?.type==="required" && "Age is Required"
              }
            </error>
          </div>
          <div>
          <label>Gender</label>
          <input placeholder='Enter Gender...' {...register("gender",{required:true})} onChange={handleInput}
          name='gender'
          id='gender'
          value={userDetails.gender} />
          <error>
              {
                errors.gender?.type==="required" && "Gender is Required"
              }
            </error>

          </div>
          <div>
            <label>Email</label>
            <input placeholder='Enter email...'  {...register("email",{required:true })} onChange={handleInput} autoComplete='off'
            name='email'
            id='email'
               value={userDetails.email}/>
            <error>
              {
                errors.email?.type==="required" && "Email is Required"
              }
            </error>
          </div>
          <div>
          <input className="button" type="submit" />
        </div>
          </form>
        </div>
        <button style={{width:'170px', height:'50px' , background:"blue", color:'white'}} onClick={()=>navigate('/')}>Chart  Page</button>

    </>
  )
}

export default Form