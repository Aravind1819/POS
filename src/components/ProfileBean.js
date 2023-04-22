import React from 'react';
import { useState } from 'react';
import { Container, Paper, Button } from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import US005 from "./Header/US005";

const ProfileBean =()=>{
    const[firstName,setfirstName]=useState('');
    const[lastName,setlastName]=useState('');
    const[dateofbirth,setdateofbirth]=useState('');
    const[gender,setgender]=useState('');
    const[street,setstreet]=useState('');
    const[location,setlocation]=useState('');
    const[city,setcity]=useState('');
    const[state,setstate]=useState('');
    const[pincode,setpincode]=useState('');
    const[mobileno,setmobileno]=useState('');
    const[emailid,setemaild]=useState('');
    const[error,seterror]=useState('');

    const[fname,setfnameerror]=useState('');
    const[lname,setlnameerror]=useState('');
    const[dob,setdoberror]=useState('');
    const[gen,setgenerror]=useState('');
    const[str,setstrerror]=useState('');
    const[loc,setlocerror]=useState('');
    const[cty,setctyerror]=useState('');
    const[st,setsterror]=useState('');
    const[pin,setpinerror]=useState('');
    const[mob,setmoberror]=useState('');
    const[email,setemailerror]=useState('');


    function handleSubmit(event){
    
        if(!fname){
            setfnameerror('firstname is reqiured');
          }else{
            setfnameerror('');
        }
        if(!lname){
            setlnameerror('Lastname is reqiured');
          }else{
            setlnameerror('');
        }
        if(!dob){
            setdoberror('DOB is reqiured');
          }else{
            setdoberror('');
        }
        if(!gen){
            setgenerror('gender is reqiured');
          }else{
            setgenerror('');
        }
        if(!str){
            setstrerror('street is reqiured');
          }else{
            setstrerror('');
        }
        if(!loc){
            setlocerror('location is reqiured');
          }else{
            setlocerror('');
        }
        if(!cty){
            setctyerror('city is reqiured');
          }else{
            setctyerror('');
        }
        if(!st){
            setsterror('state is reqiured');
          }else{
            setsterror('');
        }
        if(!pin){
            setpinerror('pincode is reqiured');
          }else{
            setpinerror('');
        }
        if(!mob){
            setmoberror('mobileno is reqiured');
          }else{
            setmoberror('');
        }
        if(!email){
            setemailerror('email  is reqiured');
          }else{
            setemailerror('');
        }
    }

        if(firstName && lastName && dateofbirth && gender  && street && location && city && state && pincode && mobileno && emailid){

    alert("Data Updated Successfully")
   
   const user={firstName,lastName,dateofbirth,gender,street,location,city,state,pincode,mobileno,emailid}
 axios.post("http://localhost:8090/customer/registerUser",user)
  .then(response=>{
    console.log(response)
  })
  .catch(error => console.log(error));
}


const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }

return(
<div>
  <US005/>
        <Container>
        <Paper elevation={4} style={paperStyle}>  
        
        <FormControl sx={{ m: 0, minWidth: 200 }} style={{ marginLeft: "40%" }}>
          <FormLabel style={{ fontSize: "25px" }}>ProfileBean</FormLabel>
        </FormControl>
         <form onSubmit={handleSubmit} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px"
        }}>
         
         {error && <div style={{ color: 'red' }}>{error}</div>}

          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <FormLabel style={{ fontSize: "17px" }}>Firstname</FormLabel>
            <input type="text" value={firstName}
              onChange={(event)=>setfirstName(event.target.value)}
               />
            {fname && <span style={{color:'red'}}>{fname}</span>}
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <FormLabel style={{ fontSize: "17px" }}>Lastname</FormLabel>
            <input type="text" value={lastName}
              onChange={(event)=>setlastName(event.target.value)}
               />
            {lname && <span style={{color:'red'}}>{lname}</span>}
          </FormControl>
          
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <FormLabel style={{ fontSize: "17px" }}>Dateofbirth</FormLabel>
            <input type="text" value={dateofbirth}
              onChange={(event)=>setdateofbirth(event.target.value)}
               />
            {dob && <span style={{color:'red'}}>{dob}</span>}
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <FormLabel style={{ fontSize: "17px" }}>Gender</FormLabel>
            <input type="text" value={gender}
              onChange={(event)=>setgender(event.target.value)}
               />
            {gen && <span style={{color:'red'}}>{gen}</span>}
          </FormControl>
          


          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <FormLabel style={{ fontSize: "17px" }}>Street</FormLabel>
            <input type="text" value={street}
              onChange={(event)=>setstreet(event.target.value)}
               />
            {str && <span style={{color:'red'}}>{str}</span>}
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <FormLabel style={{ fontSize: "17px" }}>Location</FormLabel>
            <input type="text" value={location}
              onChange={(event)=>setlocation(event.target.value)}
               />
            {loc && <span style={{color:'red'}}>{loc}</span>}
          </FormControl>
            

          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <FormLabel style={{ fontSize: "17px" }}>City</FormLabel>
            <input type="text" value={city}
              onChange={(event)=>setcity(event.target.value)}
               />
         {cty && <span style={{color:'red'}}>{cty}</span>}
          </FormControl>
            

          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <FormLabel style={{ fontSize: "17px" }}>State</FormLabel>
            <input type="text" value={state}
              onChange={(event)=>setstate(event.target.value)}
               />
            {st && <span style={{color:'red'}}>{st}</span>}
          </FormControl>

          
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <FormLabel style={{ fontSize: "17px" }}>Pincode</FormLabel>
            <input type="text" value={pincode}
              onChange={(event)=>setpincode(event.target.value)}
               />
            {fname && <span style={{color:'red'}}>{fname}</span>}
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <FormLabel style={{ fontSize: "17px" }}>MobileNo</FormLabel>
            <input type="text" value={mobileno}
              onChange={(event)=>setmobileno(event.target.value)}
               />
            {mob && <span style={{color:'red'}}>{mob}</span>}
          </FormControl>
          
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <FormLabel style={{ fontSize: "17px" }}>EmailID</FormLabel>
            <input type="email" value={emailid}
              onChange={(event)=>setemaild(event.target.value)}
               />
            {email && <span style={{color:'red'}}>{email}</span>}
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

export default ProfileBean;