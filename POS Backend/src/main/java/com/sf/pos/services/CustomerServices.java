package com.sf.pos.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sf.pos.dao.CustomerDao;
import com.sf.pos.model.CartBean;


@Service
public class CustomerServices {
    
	@Autowired
	private CustomerDao cDao;
	
	public String addToCart(CartBean cartBean) {
		return cDao.addToCart(cartBean);
	}
	
	public ArrayList<CartBean> viewCart()
	{
		return cDao.viewCart();
	}
	public String updateCart(CartBean cartBean)
	{
		return cDao.updateCart(cartBean);
	}
	public String deleteCart(int cartId)
	{
		return cDao.deleteCart(cartId);
	}
	public CartBean viewCartById(int cartId)
	{
		return cDao.viewCartById(cartId);
	}
}
