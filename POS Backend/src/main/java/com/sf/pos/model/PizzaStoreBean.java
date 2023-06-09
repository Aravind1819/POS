package com.sf.pos.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class PizzaStoreBean {
	@Id
	@GeneratedValue
private int storeID;

private String name;
private String street;
private String mobileNo;
private String city;
private String state;
private  String pincode;
public int getStoreID() {
	return storeID;
}
public void setStoreID(int storeID) {
	this.storeID = storeID;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getStreet() {
	return street;
}
public void setStreet(String street) {
	this.street = street;
}
public String getMobileNo() {
	return mobileNo;
}
public void setMobileNo(String mobileNo) {
	this.mobileNo = mobileNo;
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
@Override
public String toString() {
	return "PizzaStoreBean [storeID=" + storeID + ", name=" + name + ", street=" + street + ", mobileNo=" + mobileNo
			+ ", city=" + city + ", state=" + state + ", pincode=" + pincode + "]";
}

}
