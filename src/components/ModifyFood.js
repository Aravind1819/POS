import axios from 'axios';
import React, { useState,useEffect } from "react";
import { Container,Paper,Button} from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import AD003 from "./Header/AD003";

function ModifyFood() {
 const[foodID,setFoodID]=useState('')
  const[name,setName]=useState('')
  const[type,setType]=useState('')

  const[foodSize,setFoodSize]=useState('')
  const[quantity,setQuantity]=useState('')
  const[price,setPrice]=useState('')
  const[foodstoredata,foodStoreData]=useState([]);

  useEffect(() => {
    axios.get('http://localhost:8090/admin/selectAll')
      .then(response => {
        const foodID = response.data.map(food => food.setFoodID);
        foodStoreData(foodstoredata);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  
  const handleClick=(e)=>{
    e.preventDefault();
    alert('Data updated successfully!');
    const foodstoredata = { foodID, name, type, foodSize, quantity, price };
    axios.put("http://localhost:8090/admin/updateFood", foodstoredata)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  

const paperStyle={padding:'50px 20px', width:600,margin:"20px auto" ,backgroundColor:"transparent"}
  return (<div className="ufood">
    <AD003/> 
    <Container >
    <Paper elevation={9} style={ paperStyle} >

    <FormControl sx={{ m: 0, minWidth: 200 }} style={{marginLeft:"24%"}}>
    <FormLabel style={{fontSize:"25px",color:"white"}}>UPDATE FOOD DETAILS...</FormLabel>
    </FormControl>
<form onSubmit={handleClick} style={{ 
    display: "flex",flexDirection: "column",alignItems: "center",marginTop: "20px"}}>


<FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>FoodID</FormLabel>
    <input type="text" name="foodID" value={foodID} onChange={(e)=>setFoodID(e.target.value)}/>
  </FormControl>

    <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Name</FormLabel>
    <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
  </FormControl>

    
 
 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Type</FormLabel>
    <input type="text" name="type" value={type} 
    onChange={(e)=>setType(e.target.value)}/>
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>FoodSize</FormLabel>
    <input type="text" name="foodSize" value={foodSize} onChange={(e)=>setFoodSize(e.target.value)}/>
 </FormControl>


 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Quantity</FormLabel>
    <input type="text" name="quantity" value={quantity} 
    onChange={(e)=>setQuantity(e.target.value)}/>
 </FormControl>

 <FormControl sx={{ m: 1, minWidth: 250 }}>
    <FormLabel style={{fontSize:"17px"}}>Price</FormLabel>
    <input type="text" name="price" value={price} 
    onChange={(e)=>setPrice(e.target.value)} />
 </FormControl>



 <FormControl sx={{ m: 1, minWidth: 50 }}>
  <Button onClick={handleClick} variant="contained" color="primary" type="submit">Update</Button>
  </FormControl>
  
</form>
</Paper>
</Container>
</div>
  )
}

export default  ModifyFood;