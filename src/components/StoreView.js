import React, { useState,useEffect } from "react";
import { Container ,Paper,Button} from '@material-ui/core';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import AD006 from "./Header/AD006";

function StoreView() {
  const [foodData, setfoodData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8090/admin/getAllStore')
      .then(response => {
        setfoodData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

 
const paperStyle={padding:'50px 20px', width:710,margin:"20px auto",background: "transparent"}
  return (<div className="store">
    <AD006/> 
    <Container>
     <Paper elevation={4} style={paperStyle}>
     <div>
     <FormControl sx={{ m: 0, minWidth: 200 }} style={{marginLeft:"33%"}}>
        <FormLabel style={{fontSize:"25px",backgroundColor:"white"}}>Pizzah Store Details</FormLabel>
        </FormControl>
      <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ border: '1px solid black' }}>
            <th style={{ border: '1px solid black', padding: '8px',backgroundColor:"white"}}>storeID</th>
            <th style={{ border: '1px solid black', padding: '8px',backgroundColor:"white"}}>Name</th>
       
            <th style={{ border: '1px solid black', padding: '8px',backgroundColor:"white"}}>MobileNo </th>
            <th style={{ border: '1px solid black', padding: '8px',backgroundColor:"white"}}>City</th>
            <th style={{ border: '1px solid black', padding: '8px',backgroundColor:"white"}}>State</th>
            <th style={{ border: '1px solid black', padding: '8px',backgroundColor:"white"}}>Pincode</th>

          </tr>
        </thead>
        <tbody>
          {foodData.map(store => (
            <tr key={store.storeid} style={{ border: '1px solid black' }}>
            <td style={{ border: '1px solid black', padding: '8px',backgroundColor:"white"}}>{store.storeID}</td>
            <td style={{ border: '1px solid black', padding: '8px',backgroundColor:"white"}}>{store.name}</td>
            <td style={{ border: '1px solid black', padding: '8px',backgroundColor:"white"}}>{store.mobileNo}</td>
            <td style={{ border: '1px solid black', padding: '8px',backgroundColor:"white"}}>{store.city}</td>
            <td style={{ border: '1px solid black', padding: '8px',backgroundColor:"white"}}>{store.state}</td>
            <td style={{ border: '1px solid black', padding: '8px',backgroundColor:"white"}}>{store.pincode}</td>
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

export default StoreView;
