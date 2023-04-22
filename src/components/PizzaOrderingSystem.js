import axios from 'axios';
import { useState,useEffect} from 'react';
import React from 'react';
import {data1} from './cc.jpg'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import US002 from "./Header/US002";



const PizzaOrderingSystem =()=> {
  const [cart, setCart] = useState([]);
  const[list,setList]=useState();
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setdescription] = useState('')
  

function handleSubmit(event) {
  event.preventDefault();
}
  // useEffect(() => {
  // axios.post("http://localhost:8089/customer/addCart")
  //   .then(response => {
  //     console.log(response)
  //     setCart(response.data);
  //   })
  //   .catch(error => {console.log(error);
  //   });
  //  }, []);

const  addToCart =()=>{
const data={
  name: 'Margherita',
   description: 'Tomato sauce',
   //image: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-paneer.4ef45717e972cf45b43c010e3cde5a22.1.jpg?width=375',
   price: '$10'
}
axios.post("http://localhost:8090/customer/addCart",pizzaVarieties).then(console.log("success"))
}
    
  

   const pizzaVarieties = [
    {
      name: 'Margherita',
       description: 'Tomato sauce, Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there! cheese, and basil',
       image: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-paneer.4ef45717e972cf45b43c010e3cde5a22.1.jpg?width=375',
       price: '$10'
    },
     {
      name: 'Veggie Delight',
      description: 'Tomato sauce, pizza topped with fresh vegetables such as bell peppers, onions, mushrooms, and black olives. A healthy and delicious option!',
      image: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-paneer.4ef45717e972cf45b43c010e3cde5a22.1.jpg?width=375',
      price: '$15'
       },
       {
       name: 'Meat Lovers',
       description: 'Tomato sauce, pizza topped with classic pepperoni, ham, and Italian sausage. A hearty and filling option for meat lovers!',
       image: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/nawabi-murg-makhni.0c32181021b6b11acdde8bbb8887248b.1.jpg?width=375',
       price: '$18'
       },
    {
         name: 'Vegetarian',
         description: 'Tomato sauce, mozzarella cheese, mushrooms, onions, and bell peppers',
          image: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-paneer.4ef45717e972cf45b43c010e3cde5a22.1.jpg?width=300',
        price: '$11'
       }
       ]
    // more pizza varieties
    

    return( <div>
    <US002/>
    <h1>Pizza Varieties</h1>
        {/* <h2>Menu</h2> */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {pizzaVarieties.map((pizza) => (
                <TableRow key={pizza.name}>
                  <TableCell><img src={pizza.image} alt={pizza.name} /></TableCell>
                  <TableCell>{pizza.name}</TableCell>
                  <TableCell>{pizza.description}</TableCell>
                  <TableCell>{pizza.price}</TableCell>
                  <TableCell><Button variant="contained" color="primary" onClick={() => addToCart(pizza)}>Add to cart</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <h2>Cart</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
             
            </TableBody>
          </Table>
        </TableContainer>
        <img src=''/>
      </div>
    );
}

  export default PizzaOrderingSystem;
              
              


              



