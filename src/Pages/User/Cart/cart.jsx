import React, { useContext,useState } from "react"
import { Products } from "../../../Component/ProductContent/productContent";
import { ShopContext } from "../../../Component/ShopContent/shop-context";
import "./cart.css";
import { Carts } from "../Product/cartProp";
import { useNavigate } from "react-router-dom";
import axios from "axios";




export const Cart = () => {

  
    const submit = () =>{

       

axios.post('/product/add').then(function (res){
    console.log(res);
}) 


    }

const navigate = useNavigate();


const { CartItem, total } = useContext(ShopContext);



const Total = total();
    return <div className="cart">
        <header>
            <h1> Your Orders</h1>
        </header>
        <main className="cartItems">
            {
                Products.map((product) => {
                    if (CartItem[product.id] !== 0){
                        return <Carts data ={product} />
                        
                    }
                })
            }          
            
           </main>

        {Total > 0 ?
        
        <div className="checkout">
            
            <p> Total Amount: ${Total}</p>
            <button onClick={() => navigate("/")}> Continue Shopping</button>
            <button onClick={() => navigate("/order")}> Checkout </button>
            
        </div>

          : <hi>Empty Cart </hi>  }
    </div>
}
