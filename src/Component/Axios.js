import axios from "axios";


export const AxiosConnect = axios.create({
     
    baseURL: `http://localhost:8080/api/api`,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
    }, 
    
   
});