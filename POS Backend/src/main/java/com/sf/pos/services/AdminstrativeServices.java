package com.sf.pos.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sf.pos.dao.AdminstartiveDao;
import com.sf.pos.model.CredentialsBean;
import com.sf.pos.model.FoodBean;
import com.sf.pos.model.PizzaStoreBean;

@Service
public class AdminstrativeServices {
	@Autowired
  private AdminstartiveDao adao;
              /////////////lOGIN rEGISTTRATION/////////
	public  String registerUser(CredentialsBean user)
	{
		return adao.registerUser(user);
	}
	public boolean authenticate(CredentialsBean user) 
	{
	return  adao.authenticate(user);
	}
	
	///////////////////fOODbEAN///////////////////
	public String addFood(FoodBean foodBean) 
	{
		return adao.addFood(foodBean);
	}
	public ArrayList<FoodBean> viewFood()
	{
		return adao.viewFood();
	}
	public String updateFood(FoodBean foodBean)
	{
		return adao.updateFood(foodBean);
	}
	public String deleteFood(int foodID)
	{
		return adao.deleteFood(foodID);
	}
	public FoodBean viewFoodById(int foodID)
	{
		return adao.viewFoodById(foodID);
	}
   //////////pIZAA Store aDD///////
	
	
	public String addStore(PizzaStoreBean pizzaStoreBean) {
		return adao.addStore(pizzaStoreBean);
	}
	
	
	public ArrayList<PizzaStoreBean> viewStore(){
		return adao.viewStore();
	}
	
	
	public String updateStore(PizzaStoreBean pizzaStoreBean) {
		return adao.updateStore(pizzaStoreBean);
	}
	
	public String deleteStore(int storeID)
	{
		return adao.deleteStore(storeID);
	}
	
	public PizzaStoreBean viewStoreById(int storeID)
	{
		return adao.viewStoreById(storeID);
	}
	
	  ///////changeOrderStatus/////////////
	
	public String changeOrderStatus(int  orderID) {
		return adao.changeOrderStatus(orderID);
	}
	
	}