import React from "react";
import { User, ShoppingCart, SignOut , Users, ShoppingBagOpen} from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import './navbar.css';
import { HomePage } from "../../Pages/User/Home";

export const Navbar = () =>{


    const navigate = useNavigate();

    const logOut = () => {
        localStorage.clear();
        navigate('/login');
       
    }

    const auth = localStorage.getItem("User");

    const Admin = localStorage.getItem("Admin");

    return(
        <div>
            
             <img
            className="logo"
            src= {require("../img/background.jpg")} 
            onClick={() => navigate('/')}
            /> 
       {
        
        auth ?
        <div className="navbar"> 
            <div className="links">
                
                <Link to="/cart"><button className="bttn"><ShoppingCart size={46} /></button></Link>
                <Link to="/profile"><button className="bttn"><User size={46} /></button></Link>
                <Link   onClick={logOut} to="/login"><button className="bttn"><SignOut size={46}/></button></Link>
           </div>
           </div>
        :
        Admin ?
        <div className="navbar"> 
            <div className="links">
                
                <Link to="/"><button className="bttn"><ShoppingBagOpen size={46} /></button></Link>
                <Link to="/rest"><button className="bttn"><Users size={46} /></button></Link>
                <Link   onClick={logOut} to="/login"><button className="bttn"><SignOut size={46} /></button></Link>
           </div>
           </div>
        
            :
            <div className="navbar"> 
            <div className="links">
            <Link to="/login"><button className="bttn"><h1><b>Sign In</b></h1></button></Link>
            <Link to="/register"><button className="bttn"><h1><b>Sign Up</b></h1></button></Link>
            
            </div>
            </div>
       }    
            
            </div>
           );
};