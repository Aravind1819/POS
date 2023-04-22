import axios from "axios";

const URL = 'http://localhost:8080/admin/addregister';

export const API ={
    register:(data)=>{
const response = axios.post(URL,data);
return response.data;
    }

} 


