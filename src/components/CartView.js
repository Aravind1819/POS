import React, { useState,useEffect } from "react";
import { Container ,Paper,Button, colors} from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
// import AD003 from "../Header/AD003";

function CartView() {
  const [setcart, setcartdata] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8090/customer/getAllCart')
      .then(response => {
        setcartdata(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

 
const paperStyle={padding:'50px 20px', width:710,margin:"20px auto",backgroundColor:"transparent"}
  return (<div className="cart">
    {/* <AD003/> */}
    <Container>
     <Paper elevation={4} style={paperStyle}>
     <div>
     <FormControl sx={{ m: 0, minWidth: 200 }} style={{marginLeft:"33%"}}>
        <FormLabel style={{fontSize:"25px",backgroundColor:"white"}}>Cart Details</FormLabel>
        </FormControl>
      <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ border: '1px solid black' }}>
            <th style={{ border: '1px solid black', padding: '8px',backgroundColor:"white" }}>cartId</th>
            <th style={{ border: '1px solid black', padding: '8px',backgroundColor:"white" }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px',backgroundColor:"white" }}>Description</th>
            <th style={{ border: '1px solid black', padding: '8px',backgroundColor:"white" }}>Price</th>
           

          </tr>
        </thead>
        <tbody>
          {setcart.map(cart => (
            <tr key={cart.cartId} style={{ border: '1px solid black' }}>
            <td style={{ border: '1px solid black', padding: '8px',backgroundColor:"white" }}>{cart.cartId}</td>
            <td style={{ border: '1px solid black', padding: '8px',backgroundColor:"white" }}>{cart.name}</td>
          
            <td style={{ border: '1px solid black', padding: '8px',backgroundColor:"white"}}>{cart.description}</td>
            <td style={{ border: '1px solid black', padding: '8px',backgroundColor:"white" }}>{cart.price}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
    
  </div>
  
        
     </Paper>
    </Container>
    </div>
  );
}

export default CartView;
