import React, { useState, useEffect } from "react";
import { Container, Paper, Button } from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import AD005 from "./Header/AD005";

const StoreAdd = () =>{
  const[storeid,setStoreid]=useState('')
  const [name, setName] = useState('')
  const [mobileno, setmobileno] = useState('')
  const [pincode, setpincode] = useState('')
  const [city, setcity] = useState('')
  const [state, setstate] = useState('')
  const [street, setstreet] = useState('')
  //const[Admin,Setadmin]=useState('')
  

  const [redirect, setRedirect] = useState('');
 
  const [sname, setsnameError] = useState('')
  const [smobileno, setmobilenoError] = useState('')
  const [cty, setctyerror] = useState('')
  const [spincode, setspincodeerror] = useState('')
  const[sstate,setstateerror]=useState('')
  const[str,setstrerror]=useState('')
  const[error,setError ]=useState('')

    function handleSubmit(event) {
      

      if(!sname){
        setsnameError('name is reqiured');
      }else{
        setsnameError('');
      }
      if (!smobileno) {
        setmobilenoError('mob is required.');
        } else {
            setmobilenoError('');
       }

       if (!cty) {
        setctyerror('city is required.');
      } else {
        setctyerror('');
     }

       if (!spincode) {
        setspincodeerror('pin is required.');
      } else {
        setspincodeerror('');
     }
       if (!sstate) {
        setstateerror('state is required.');
      } else {
        setstateerror('');
     }

     if (!str) {
        setstrerror('street is required.');
    } else {
        setstrerror('');
   }
      
       
        // if (name && type && seatcapacityError && registrationnumberError && fareperkmError) 
        if(name && mobileno&& city && pincode && state  && street){

      alert("Data Updated Successfully")
      const store={name,mobileno,city,pincode,state,street}
    axios.post("http://localhost:8090/admin/addpizzastored",store)
      .then(response=>{
        console.log(response)
      })
  .catch(error => console.log(error));
    }}

  


  const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto",backgroundColor:"transparent" }
  return (<div className="store">
   <AD005/>
    <Container>

      <Paper elevation={4} style={paperStyle}>


        <FormControl sx={{ m: 0, minWidth: 200 }} style={{ marginLeft: "40%" }}>
          <FormLabel style={{ fontSize: "25px", color:"white"}}>Add-PizzahStore</FormLabel>
        </FormControl>
        <form onSubmit={handleSubmit} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px"
        }}>

          {error && <div style={{ color: 'red' }}>{error}</div>}

          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <FormLabel style={{ fontSize: "17px" }}>Name</FormLabel>
            <input type="text" value={name}
              onChange={(event)=>setName(event.target.value)}
               />
            {sname && <span style={{color:'red'}}>{sname}</span>}
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <FormLabel style={{ fontSize: "17px" }}>MobileNo</FormLabel>
            <input
              type="text"
              value={mobileno}
              onChange={(event)=>setmobileno(event.target.value)}
            />
            { smobileno&& <span style={{color:'red'}}>{smobileno}</span>}
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <FormLabel style={{ fontSize: "17px" }}>City</FormLabel>
            <input
              type="city"
              value={city}
              onChange={(event)=>setcity(event.target.value)}
            />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <FormLabel style={{ fontSize: "17px" }}>Street</FormLabel>
            <input
              type="text"
              value={street}
              onChange={(event)=>setstreet(event.target.value)}
            />
          {str && <span style={{color:'red'}}>{str}</span>}

          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <FormLabel style={{ fontSize: "17px" }}>Pincode</FormLabel>
            <input
              type="text"
              value={pincode}
              onChange={(event)=>setpincode(event.target.value)}
            />
            {spincode && <span style={{color:'red'}}>{spincode}</span>}
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <FormLabel style={{ fontSize: "17px" }}>State</FormLabel>
            <input
              type="text"
              value={state}
              onChange={(event)=>setstate(event.target.value)}
            />
          {sstate && <span style={{color:'red'}}>{sstate}</span>}

          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 50 }}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
          </FormControl>

        </form>
      </Paper>
    </Container>
    </div>
  );
  
}


export default StoreAdd;