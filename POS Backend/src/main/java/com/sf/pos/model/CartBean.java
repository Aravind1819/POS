package com.sf.pos.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class CartBean {
	@Id
	@GeneratedValue
private int  cartId;
private String userID;
private String foodID;
private String type;																																		
private String quantity;
private String cost;
private String orderDate;
public int getCartId() {
	return cartId;
}
public void setCartId(int cartId) {
	this.cartId = cartId;
}
public String getUserID() {
	return userID;
}
public void setUserID(String userID) {
	this.userID = userID;
}
public String getFoodID() {
	return foodID;
}
public void setFoodID(String foodID) {
	this.foodID = foodID;
}
public String getType() {
	return type;
}
public void setType(String type) {
	this.type = type;
}
public String getQuantity() {
	return quantity;
}
public void setQuantity(String quantity) {
	this.quantity = quantity;
}
public String getCost() {
	return cost;
}
public void setCost(String cost) {
	this.cost = cost;
}
public String getOrderDate() {
	return orderDate;
}
public void setOrderDate(String orderDate) {
	this.orderDate = orderDate;
}
}
