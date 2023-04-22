package com.sf.pos.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sf.pos.model.CartBean;
import com.sf.pos.services.CustomerServices;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/customer")
public class CustomerController {
	
	@Autowired
	CustomerServices customerServices;
	
	
	@GetMapping("/getAllCart")
	public ArrayList<CartBean> cart1(){
		
		return customerServices.viewCart();	
	}

	@PostMapping("/addCart")
	public String cart2(@RequestBody CartBean cs){
		customerServices.addToCart(cs);
		return "<h1>Cart Store Added Successfully</h1>";
	}

	@PutMapping("/updateCart")
	public String cart3(@RequestBody CartBean cs) {
		customerServices.updateCart(cs);
		return "<h1>Cart Store Updated Successfully</h1>";
	}

	@DeleteMapping("/deletecart/{id}")
		public String cart4(@PathVariable (value="id") int cartId) {
		return "<h1>"+customerServices.deleteCart(cartId)+" record deleted successfully</h1>";

	}
}
