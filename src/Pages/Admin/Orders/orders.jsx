import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Table } from 'antd';

export const Orders = () => {


  const [ product , setproduct ] =useState([])

  useEffect(() => {

    loadUser();
    },[]
);

const loadUser = async() =>{
    const result =await axios.get("http://localhost:8080/view");
    setproduct(result.data);
}
const columns =[ 
  {
      title: "Id",
      dataIndex: 'id',
      key:"id"
  },
  {
      title: "Product Name",
      dataIndex: 'name',
      key:"name"
  },
  {
      title: "Price",
      dataIndex: 'price',
      key:"price"
  },
  {
      title: "Total",
      dataIndex: 'total',
      key:"total"
  }
]
  return ( <main
    style={{
        display: "flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
       <Table
       columns={columns}
       dataSource={product}></Table>
    </main>
  )
}
