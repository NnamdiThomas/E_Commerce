import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "antd";

export const Registered = () => 
{
     
    const [ user , setuser ] =useState([])
 
   useEffect(() => {

        loadUser();
        },[]
    );
    
    const loadUser = async() =>{
        const result =await axios.get("http://localhost:8080/all");
        setuser(result.data);
    }
    const columns =[ 
        {
            title: "Id",
            dataIndex: 'id',
            key:"id"
        },
        {
            title: "First Name",
            dataIndex: 'firstname',
            key:"firstname"
        },
        {
            title: "Last Name",
            dataIndex: 'lastname',
            key:"lastname"
        },
        {
            title: "Other Name",
            dataIndex: 'othername',
            key:"othername"
        },
        {
            title: "Email",
            dataIndex: 'email',
            key:"email"
        },
        { 
            title: "Role",
            dataIndex: 'role',
            key:"role"
        },
    ]
   
    return (                            
        <div>
            <main
            style={{
                display: "flex",
                justifyContent:"center",
                alignItems:"center"
            }}>
               <Table
               columns={columns}
               dataSource={user}></Table>
            </main>



        </div>
    )
}