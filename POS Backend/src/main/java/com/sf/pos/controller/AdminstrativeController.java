package com.sf.pos.controller;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.mapping.Value;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sf.pos.model.CredentialsBean;
import com.sf.pos.model.FoodBean;
import com.sf.pos.model.PizzaStoreBean;
import com.sf.pos.services.AdminstrativeServices;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin")
public class AdminstrativeController {
	@Autowired
	private AdminstrativeServices adminstrativeServices;
	
	////////Login and Register/////
	
	@GetMapping("/selectUser/{userName}/{password}")
	@ResponseBody
	public boolean auth(@PathVariable String userName,@PathVariable String password)
{

		System.out.println("Under Controller "+userName+" "+password);
		CredentialsBean cb=new CredentialsBean();
		cb.setUserID(userName); 
		cb.setPassword(password);
		System.out.println(adminstrativeServices.authenticate(cb));;
		return adminstrativeServices.authenticate(cb);
	}
	@PostMapping("/registerUser")
	public String reg(@RequestBody CredentialsBean cb)
	{
		adminstrativeServices.registerUser(cb);
		return "<h1>User Added Successfully</h1>";
	}

	/////fOODbEAN////////////////
	
	
@PostMapping("/addFood")
public String meth1(@RequestBody FoodBean Fb)
{
	adminstrativeServices.addFood(Fb);
	return "<h1>Food Added Successfully</h1>";
}
@GetMapping("/selectAll")
public List<FoodBean> meth2()
{
	
	return adminstrativeServices.viewFood();
}
@PutMapping("/updateFood")
public String meth3(@RequestBody FoodBean Fb)
{
	adminstrativeServices.updateFood(Fb);
	return "<h1> Food Updated successfully</h1>";
}
@GetMapping("/food/{id}")
public FoodBean meth4(@PathVariable(value = "id") int foodID)
{
	return adminstrativeServices.viewFoodById(foodID);
	
}
@DeleteMapping("/deleteFood/{id}")
public String meth5(@PathVariable(value="id") int foodID)
{
	System.out.println(foodID);
	return "<h1>"+adminstrativeServices.deleteFood(foodID)+" record deleted successfully</h1>";
}

//////////////////////////PizzaaStoree/////////////

@GetMapping("/getAllStore")
public ArrayList<PizzaStoreBean> pizza1(){
	
	return adminstrativeServices.viewStore();	
}

@PostMapping("/addpizzastored")
public String pizza2(@RequestBody PizzaStoreBean ps){
	adminstrativeServices.addStore(ps);
	return "<h1>Pizzaha Store Added Successfully</h1>";
}

@PutMapping("/updatestore")
public String pizza3(@RequestBody PizzaStoreBean ps) {
	adminstrativeServices.updateStore(ps);
	return "<h1>Pizza Store Updated Successfully</h1>";
}

@DeleteMapping("/deletestore/{id}")
	public String pizza4(@PathVariable (value="id") int storeID) {
	return "<h1>"+adminstrativeServices.deleteStore(storeID)+" record deleted successfully</h1>";

}


  //////OrderBean OrderStatus////
@PutMapping("/updatestatus/{id}")
 public String order1(@PathVariable(value="id") int orderID) {
	return "<h1>"+adminstrativeServices.changeOrderStatus(orderID)+" Successfully Changed Your Order</h1>";
}



}
