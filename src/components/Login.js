import React, { useState,useEffect } from "react";
import { Container ,Paper,Button} from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import "./Login.css"

function Login() {
  const[username, setUsername] = useState('')
  const [options, setOptions] = useState([]);
  const[password, setPassword] = useState('')
  const [option, setOption] = useState("select");
  const [redirect, setRedirect] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogin = () => {
    // handle login logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // handle logout logic here
    setIsLoggedIn(false);
  };

  function handleUserIdChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

   function handleSubmit(event) {
    event.preventDefault();
    axios.get(`http://localhost:8090/admin/selectUser/${username}/${password}`)
      .then(response => {
        const data = response.data;
        if (username === 'AD-001' && password === 'AD-001') {
          setRedirect('/FoodBean');
        } else if (username === 'AD-002' && password === 'AD-002') {
          setRedirect('/Viewfood');
        } else if (username === 'AD-003' && password === 'AD-003') {
          setRedirect('/ModifyFood');
        } else if (username === 'AD-004' && password === 'AD-004') {
          setRedirect('/Deletefood');

        } else if (username === 'AD-005' && password === 'AD-005') {
          setRedirect('/StoreAdd');

        } else if (username === 'AD-006' && password === 'AD-006') {
          setRedirect('/StoreView');
          
        } else if (username === 'AD-007' && password === 'AD-007') {
          setRedirect('/UpdateStore');
          

        } else if (username === 'AD-008' && password === 'AD-008') {
          setRedirect('/StoreDelete');
         
        } else if (username === 'AD-009' && password === 'AD-009') {
          setRedirect('/Removefood');


          
        } else if (username === 'US-001' && password === 'US-001') {
          setRedirect('/ProfileBean');
          
        } else if (username === 'US-002' && password === 'US-002') {
          setRedirect('/PizzaOrderingSystem');
          
        } else if (username === 'US-003' && password === 'US-003') {
          setRedirect('/CartView');

        } else if (username === 'US-004' && password === 'US-004') {
          setRedirect('/Creditcardbean');
          

        } else {
          setError('Invalid credentials');
        }
      })
      .catch(error => console.error('Error:', error));
  }

  if (redirect) {
    return <Redirect to={redirect} />;
  }

const paperStyle={padding:'50px 20px',  margin:"20px auto",backgroundColor:"transparent", marginLeft:"800px"}
  return (
    <div className="ss">
    <div className="PP">
      
    <Container >
      
        <Paper elevation={4} style={paperStyle} variant="outlined">
        


        
        <FormControl sx={{ m: 0, minWidth: 200 }} style={{marginLeft:"45%"}}>
        <FormLabel style={{fontSize:"25px",color:"white"}}>Login</FormLabel>
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
          <option >User</option>
         
        </select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 250 }}>
        <FormLabel style={{fontSize:"17px"}}>Username</FormLabel>
        <input type="text" value={username}
          onChange={handleUserIdChange}/>

      </FormControl>
    
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <FormLabel style={{fontSize:"17px"}}>Password</FormLabel>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
     </FormControl>

     <FormControl sx={{ m: 1, minWidth: 50 }}>
      <Button  variant="contained" color="primary" onClick={handleSubmit}>Login</Button>
      </FormControl>
      

    </form>
    </Paper>
    </Container>
    </div>
    </div>
  );
}

export default Login;