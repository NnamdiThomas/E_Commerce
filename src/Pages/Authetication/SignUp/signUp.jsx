import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Register = () => {

  let navigate = useNavigate;


const [user, setuser] = useState({
    firstname : "",
    lastname : "",
    othername : "",
    email : "",
    password: "",
  });
  const {firstname, lastname, othername, email, password} = user;

  const onInputChange = (e) => {
    setuser({...user, [e.target.name]: e.target.value});
  };

  const onSubmit = async(e) =>{
    e.preventDefault();
    await axios.post("http://localhost:8080/api/api/register",user)
    .then((res) => {
     
      if(res.status === 200 || res.status === 201){          
        alert("Registration Successful");
        navigate('/');
      }
     

        }
        );
  }
  return (
    <div className='pages'>
      <form className='forms' onSubmit={(e) => onSubmit(e)}>
        <label className='labels'>
          First Name
        </label>
       <input 
       type={"text"}
       className='inputs'
       name='firstname'
       placeholder='First Name'
       
       value={firstname}
       onChange={(e) => onInputChange(e)}
       />
       <label className='labels'>
          Last Name
        </label>
       <input 
       type={"text"}
       className='inputs'
       name='lastname'
       placeholder='Last Name'
       
       value={lastname}
       onChange={(e) => onInputChange(e)}
       />
       <label className='labels'>
          Other Names
        </label>
       <input 
       type={"text"}
       className='inputs'
       name='othername'
       placeholder='Other Name'
       
       value={othername}
       onChange={(e) => onInputChange(e)}
       />
       <label className='labels'>
          Email
        </label>
       <input 
       type={"text"}
       className='inputs'
       name='email'
       placeholder='Email'
       
       value={email}
       onChange={(e) => onInputChange(e)}
       />
        <label className='labels'>
          Password
        </label>
        <input
          type={"password"}
          placeholder="Password"
          className='inputs'
          name='password'

          value={password}
          onChange={(e) => onInputChange(e)}
        />
        <button className='bttns' type="submit" >Register</button>
        </form>
    </div>
  );
};
