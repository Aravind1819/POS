import React, { useState,useEffect } from "react";
import { Container ,Paper,Button} from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

function Register() {
  const[username, setUsername] = useState('')
  const [options, setOptions] = useState([]);
  const[password, setPassword] = useState('')
  const [option, setOption] = useState("select");
  const [redirect, setRedirect] = useState('');
  const [error, setError] = useState('');
  const[mobile, setMobile] = useState('')
  const[email, setEmail] = useState('')

  function handleChange(event) {
   console.log(event.target.value)
  }

 

   function handleSubmit(event) {
    event.preventDefault();
    axios.get(`http://localhost:8090/admin/selectUser/${username}/${password}`)
      .then(response => {
        const data = response.data;
        if (username === 'AD-001' && password === 'AD-001') {
          setRedirect('/FoodBean');
        } else if (username === 'AD-002' && password === 'AD-002') {
          setRedirect('/Delete');
        } else if (username === 'AD-003' && password === 'AD-003') {
          setRedirect('/View');
        } else if (username === 'AD-004' && password === 'AD-004') {
          setRedirect('/Modify');
        } else {
          setError('Invalid credentials');
        }
      })
      .catch(error => console.error('Error:', error));
  }

  if (redirect) {
    return <Redirect to={redirect} />;
  }

const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
  return (
    <Container>
      
        <Paper elevation={4} style={paperStyle}>

        
        <FormControl sx={{ m: 0, minWidth: 200 }} style={{marginLeft:"40%"}}>
        <FormLabel style={{fontSize:"25px"}}>Register</FormLabel>
        </FormControl>
    <form onSubmit={handleSubmit} style={{ 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px"
      }}>

{error && <div style={{ color: 'red' }}>{error}</div>}

   <FormControl sx={{ m: 1, minWidth: 250 }}>
      <FormLabel style={{fontSize:"15px"}}>User Type</FormLabel>
        <select style={{height:"40px",fontSize:"15px"}}  >
        <option value="select">Select</option>
          <option >Admin</option>
          <option >user</option>
         
        </select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 250 }}>
        <FormLabel style={{fontSize:"17px"}}>Username</FormLabel>
        <input type="text" 
          onChange={handleChange}/>

      </FormControl>
    
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <FormLabel style={{fontSize:"17px"}}>Password</FormLabel>
        <input
          type="password"
         
          onChange={handleChange}
        />
     </FormControl>

     <FormControl sx={{ m: 1, minWidth: 250 }}>
        <FormLabel style={{fontSize:"17px"}}>Mobile</FormLabel>
        <input
          type="number"
         
          onChange={handleChange}
        />
     </FormControl>
     <FormControl sx={{ m: 1, minWidth: 250 }}>
        <FormLabel style={{fontSize:"17px"}}>Email</FormLabel>
        <input
          type="email"
          
          onChange={handleChange}
        />
     </FormControl>

     <FormControl sx={{ m: 1, minWidth: 50 }}>
      <Button  variant="contained" color="primary" onClick={handleSubmit}>Register</Button>
      </FormControl>
      
    </form>
    </Paper>
    </Container>
  );
}

export default Register;