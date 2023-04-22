package com.sf.pos.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Register {
	@Id
	@GeneratedValue
   private int uid;
	@Column
   private String name;
  
 @Column
private String email;
 @Column
  private String password;

	@Column
	private String firstName;
	@Column
	private String lastName;
	@Column
	private String dateofBirth;
	@Column
	private String  gender;
	@Column
	private String street;
	@Column
	private String location;
	@Column
	private String city;
	@Column
	private String pincode;
	@Column
	private String mobileNo;

 
 
 
 public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public int getUid() {
	return uid;
}
public void setUid(int uid) {
	this.uid = uid;
}
@Override
public String toString() {
	return "Register [uid=" + uid + ", name=" + name + ", email=" + email + ", password=" + password + ", firstName="
			+ firstName + ", lastName=" + lastName + ", dateofBirth=" + dateofBirth + ", gender=" + gender + ", street="
			+ street + ", location=" + location + ", city=" + city + ", pincode=" + pincode + ", mobileNo=" + mobileNo
			+ "]";
}

}
