package com.sf.pos.dao;

import java.util.ArrayList;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sf.pos.model.CartBean;



@Repository
public class CustomerDao {
	@Autowired 

	private SessionFactory sessionFactory;
	private Session session;
	private Transaction transaction;
	
	private Query<CartBean> c;
	
	
	
	public String addToCart(CartBean cartBean) {
		if(cartBean!=null)
		{
			session=sessionFactory.openSession();
			transaction=session.beginTransaction();
			session.save(cartBean);
			transaction.commit();
			session.close();
			return "SUCCESS";
		}
		else if(cartBean==null)
		{
			return "ERROR";
		}
		else
		{
			return "FAIL";
		}
	}

	public ArrayList<CartBean> viewCart() {
		{
			session=sessionFactory.openSession();
			transaction=session.beginTransaction();
			c=session.createQuery("from CartBean");
			System.out.println((ArrayList<CartBean>)c.list());
			return (ArrayList<CartBean>) c.list();
		}
	}

	public String updateCart(CartBean cartBean) {
		{
			session=sessionFactory.openSession();
			transaction=session.beginTransaction();
			if(cartBean!=null)
			{
			session.update(cartBean);

			transaction.commit();

			session.close();
			return "SUCCESS";
			}
			else if(cartBean==null)
			{
				return "FAIL";
			}
			else
			{
				return "ERROR";
			}
		}
	}

	public String deleteCart(int cartId) {
		{
			session=sessionFactory.openSession();
			transaction=session.beginTransaction();
			if(cartId>=0)
			{
			Query q1=session.createQuery("delete from CartBean where cartId=:cid");
			q1.setParameter("cid", cartId);
			q1.executeUpdate();
	        transaction.commit();
	        session.close();
			return "SUCCESS";
			}
			else
			{
				return "FAIL";
			}
		}
	}

	public CartBean viewCartById(int cartId) {
		{
			CartBean cBean=new CartBean();
			session=sessionFactory.openSession();
			transaction=session.beginTransaction();
		Query<CartBean> q2=session.createQuery("from CartBean where cartId=:cid");
		q2.setParameter("cid", cartId);
		ArrayList<CartBean> all=(ArrayList<CartBean>) q2.getResultList();
		for(CartBean c1:all)
		{
			cBean=c1;
		}
		return cBean;
		}
	}

}
