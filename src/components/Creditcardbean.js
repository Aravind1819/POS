import { useState } from 'react';
import React from 'react';
import { Grid, TextField, Button,Container,Paper, FormHelperText } from '@material-ui/core';
import axios from 'axios';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/material/FormControl';
import US004 from "./Header/US004";

function Creditcardbean() {
  const[amount,setAmount]=useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    if(amount && cardNumber && expirationDate && securityCode  && billingAddress){

    alert(' Successfully Payment!');
    axios.post(("http://localhost:8089/customer/addPayment"), {
    amount,
    cardNumber,
    expirationDate,
    securityCode,
    billingAddress,
})

.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error(error);
})
    }
} 
  const handleamountChange = (event) => {
    setAmount(event.target.value);
  };
  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpirationDateChange = (event) => {
    setExpirationDate(event.target.value);
  };

  const handleSecurityCodeChange = (event) => {
    setSecurityCode(event.target.value);
  };

  const handleBillingAddressChange = (event) => {
    setBillingAddress(event.target.value);
  };

  const validateForm = () => {
    if (!amount || amount.length !==3) {
        setError('Invalid Amount');
        return false;
      }
    if (!cardNumber || cardNumber.length !== 16) {
      setError('Invalid card number');
      return false;
    }
    if (!expirationDate || expirationDate.length !== 6) {
      setError('Invalid expiration date');
      return false;
    }
    if (!securityCode || securityCode.length !== 3) {
      setError('Invalid security code');
      return false;
    }
    if (!billingAddress) {
      setError('Billing address is required');
      return false;
    }
    return true;
  };
  const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
  return (
  
    <div>
      <US004/>
        <container>
        <Paper elevation={4} style={paperStyle}>
        <FormControl sx={{ m: 0, minWidth: 200 }} style={{ marginLeft: "40%" }}>
          <FormLabel style={{ fontSize: "25px" }}>Payment</FormLabel>
        </FormControl>
    <form onSubmit={handleSubmit}>
    
    <FormControl sx={{ m: 1, minWidth: 250 }}>
      
      <TextField
        label="Amount"
        variant="outlined"
        fullWidth
        value={amount}
        onChange={handleamountChange}
      />
   
    </FormControl>
    <FormControl sx={{ m: 1, minWidth: 250 }}>
    <TextField
        label="CardNumber"
        type='number'
        variant="outlined"
        fullWidth
        value={cardNumber}
        onChange={handleCardNumberChange}
      />
         
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 250 }}>
       
          <TextField
            label="Expiration date"
            variant="outlined"
            fullWidth
            value={expirationDate}
            onChange={handleExpirationDateChange}
          />
        
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
      
          <TextField
            label="Security code"
            variant="outlined"
            fullWidth
            value={securityCode}
            onChange={handleSecurityCodeChange}
          />
       
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
       
          <TextField
            label="Billing address"
            variant="outlined"
            fullWidth
            value={billingAddress}
            onChange={handleBillingAddressChange}
          />
       
        </FormControl>
        <br/>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
       
          <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        
        </FormControl>
        {error && (
          <Grid item xs={12}>
            <FormHelperText error>{error}</FormHelperText>
          </Grid>
        )}
      
    
    </form>
    </Paper>

    </container>

    </div>
  );
}

export default Creditcardbean;
