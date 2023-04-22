// import React, { useState, useEffect } from "react";
// import { Container, Paper, Button } from '@material-ui/core';
// import FormLabel from '@mui/joy/FormLabel';
// import FormControl from '@mui/material/FormControl';
// import axios from 'axios';
// import { Redirect } from 'react-router-dom'

// const ADD = () =>{
//   const [name, setName] = useState('')
//   const [type, setType] = useState('')
//   const [quantity, setQuantity] = useState('')
//   const [price, setPrice] = useState('')
//   const [foodsize, setFoodsize] = useState('')

  
//   const [password, setPassword] = useState('')
//   const [options, setOptions] = useState([]);
//   const [option, setOption] = useState("select");
  
//   const [redirect, setRedirect] = useState('');
 
//   const [sname, setsnameError] = useState('')
//   const [typeError, setTypeError] = useState('')
//   const [squantity, setsquantityerror] = useState('')
//   const[sprice,setspriceerror]=useState('')
//   const[sfoodsize,setsfoodsize]=useState('')
//   const[error,setError ]=useState('')

//     function handleSubmit(event) {
      

//       if(!sname){
//         setsnameError('name is reqiured');
//       }else{
//         setsnameError('');
//       }
//       if (!type) {
//           setTypeError('Type is required.');
//         } else {
//           setTypeError('');
//        }

//        if (!sfoodsize) {
//         setsfoodsize('Food  is required.');
//       } else {
//         setsfoodsize('');
//      }
//        if (!squantity) {
//         setsquantityerror('Quantity is required.');
//       } else {
//         setsquantityerror('');
//      }

//      if (!sprice) {
//       setspriceerror('Price is required.');
//     } else {
//       setspriceerror('');
//    }
      
       
//         // if (name && type && seatcapacityError && registrationnumberError && fareperkmError) 
//         if(type && name && quantity && price  && foodsize){

//       alert("Data Updated Successfully")
//       const food={name,foodsize,type,quantity,price}
//     axios.post("http://localhost:8089/admin/addFood",food)
//       .then(response=>{
//         console.log(response)
//       })
//   .catch(error => console.log(error));
//     }}

  


//   const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
//   return (<div>
//     <AD-001/>
//     <Container>

//       <Paper elevation={4} style={paperStyle}>


//         <FormControl sx={{ m: 0, minWidth: 200 }} style={{ marginLeft: "40%" }}>
//           <FormLabel style={{ fontSize: "25px" }}>Add-Food</FormLabel>
//         </FormControl>
//         <form onSubmit={handleSubmit} style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           marginTop: "20px"
//         }}>

//           {error && <div style={{ color: 'red' }}>{error}</div>}

//           <FormControl sx={{ m: 1, minWidth: 250 }}>
//             <FormLabel style={{ fontSize: "17px" }}>Name</FormLabel>
//             <input type="text" value={name}
//               onChange={(event)=>setName(event.target.value)}
//                />
//             {sname && <span style={{color:'red'}}>{sname}</span>}
//           </FormControl>

//           <FormControl sx={{ m: 1, minWidth: 250 }}>
//             <FormLabel style={{ fontSize: "17px" }}>Type</FormLabel>
//             <input
//               type="text"
//               value={type}
//               onChange={(event)=>setType(event.target.value)}
//             />
//             {typeError && <span style={{color:'red'}}>{typeError}</span>}
//           </FormControl>

//           <FormControl sx={{ m: 1, minWidth: 250 }}>
//             <FormLabel style={{ fontSize: "17px" }}>FoodSize</FormLabel>
//             <input
//               type="number"
//               value={foodsize}
//               onChange={(event)=>setFoodsize(event.target.value)}
//             />
//           </FormControl>
//           <FormControl sx={{ m: 1, minWidth: 250 }}>
//             <FormLabel style={{ fontSize: "17px" }}>Quantity</FormLabel>
//             <input
//               type="text"
//               value={quantity}
//               onChange={(event)=>setQuantity(event.target.value)}
//             />
//             {squantity && <span style={{color:'red'}}>{squantity}</span>}
//           </FormControl>

//           <FormControl sx={{ m: 1, minWidth: 250 }}>
//             <FormLabel style={{ fontSize: "17px" }}>Price</FormLabel>
//             <input
//               type="text"
//               value={price}
//               onChange={(event)=>setPrice(event.target.value)}
//             />
//           {sprice && <span style={{color:'red'}}>{sprice}</span>}

//           </FormControl>

//           <FormControl sx={{ m: 1, minWidth: 50 }}>
//             <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
//           </FormControl>

//         </form>
//       </Paper>
//     </Container>
//     </div>
//   );
  
// }


// export default ADD;