package com.sf.pos.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class OrderBean {
	@Id
	@GeneratedValue
private int orderID;
	public int getOrderID() {
		return orderID;
	}
	public void setOrderID(int orderID) {
		this.orderID = orderID;
	}
	public String getOrderStatus() {
		return orderStatus;
	}
	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}
	public String getSteet() {
		return steet;
	}
	public void setSteet(String steet) {
		this.steet = steet;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	public String getUserID() {
		return userID;
	}
	public void setUserID(String userID) {
		this.userID = userID;
	}
	public String getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}
	private String orderStatus;
	private String steet;
	private String city;
	private String state;
	private String pincode;
	private String mobileNo;
	private String userID;
	private String orderDate;
    
	
	

////Manytoone
//@ManyToOne(fetch = FetchType.LAZY, optional = false)
//@JoinColumn(name = "storeID", nullable = false)
//private PizzaStoreBean pizzaStoreBean;
//public PizzaStoreBean getPizzaStoreBean() {
//	return pizzaStoreBean;
//}
//public void setPizzaStoreBean(PizzaStoreBean pizzaStoreBean) {
//	this.pizzaStoreBean = pizzaStoreBean;
//}









	


}
