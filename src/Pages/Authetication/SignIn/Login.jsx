import React,{useState} from 'react'
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const nav = useNavigate();
  
    const [user, setuser] = useState({
      email : "",
      password: "",
    });
    const {email, password} = user;
  
    const onInputChange = (e) => {
      setuser({...user, [e.target.name]: e.target.value});
    };

    const onSubmit = async(e) =>{
      e.preventDefault();
      await axios.post("http://localhost:8080/api/api/login",user).then((res) => {
        localStorage.setItem("token", res.data)
        localStorage.setItem("firstName", res.data.userDTO.firstName)
        localStorage.setItem("lastName", res.data.userDTO.lastName)
        localStorage.setItem("email", res.data.userDTO.email)
        
        if(res.data.userDTO.role === "User"){
          alert("Login Successful");
          localStorage.setItem("User", res.data)
          nav('/');
        }
        else  if(res.data.userDTO.role === "Admin"){
          alert("Login Successful");
          localStorage.setItem("Admin", res.data)
          nav('/');
        }
        else {
          alert("Incorrect Email Or Password");
        }

      })
    }
  
    return (
      <div className='pages'>
        <form className='forms' onSubmit={(e) => onSubmit(e)}>
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
          <button className='bttns' type="submit" >Login</button>
          </form>
      </div>
    );
  };
  