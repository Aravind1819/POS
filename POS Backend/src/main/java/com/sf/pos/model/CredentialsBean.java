package com.sf.pos.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table
public class CredentialsBean {
	@Id
	@GeneratedValue
	private int uid;
	private String userID;
    private  String password;
    private String userType;
    private int loginStatus;

public String getUserID() {
	return userID;
}
public void setUserID(String userID) {

	this.userID=userID;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password=password;
}
public String getUserType() {
	return userType;
}
public void setUserType(String userType) {
	this.userType = userType;
}
public int getLoginStatus() {
	return loginStatus;
}
public void setLoginStatus(int loginStatus) {
	this.loginStatus = loginStatus;
}

}

