import React, {useState} from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import "./sidebar.css"

export const Sidebar = () => {
  const [show , setshow] =useState(false);
  
  const navigate = useNavigate();
  
  return <div>

    <div className={show?'sidebar1':'sidebar'}>
        <ul>
            <div  className="main" onClick={() => setshow(!show)}>
                <GiHamburgerMenu className="icon" size={46} />
            </div>
            <li>
                {show?"": <h2 onClick={() => navigate("/rest")}>Customers</h2>}
            </li>
            <li>
                {show?"": <h2 onClick={() => navigate("/")}>Orders</h2>}
            </li>
            <li>
                {show?"":  <h2 onClick={() => navigate("/")}>Upload Product</h2>}
            </li>
        </ul>

    </div>
    </div>
}