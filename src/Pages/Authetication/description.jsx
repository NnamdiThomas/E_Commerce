import React from "react"
import { Products } from "./products";
import { Product } from "../Shop/product";
import axios from "axios"
import { useState, useEffect } from "react"
export const Description = () => 
    {
     
        const [ des , setdes ] =useState([])
    
        useEffect(() => {
    
            loadUser();
            },[]
        );
        
        const loadUser = async() =>{
            const result =await axios.get("http://localhost:8080/view");
            setdes(result.data);
        }
    
    return (
        <div>
            <main className="productDescription">
                { 
                    des.map((description) => {
                        if (Product.id === description.id){
                        <Products data ={description}  />  
                        }

                    })
                }
            </main>
        </div>
    
    )
    }