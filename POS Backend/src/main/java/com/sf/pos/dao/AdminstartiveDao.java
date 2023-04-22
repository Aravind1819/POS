package com.sf.pos.dao;

import java.util.ArrayList;

import org.hibernate.query.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sf.pos.model.CredentialsBean;
import com.sf.pos.model.FoodBean;
import com.sf.pos.model.OrderBean;
import com.sf.pos.model.PizzaStoreBean;
import com.sf.pos.model.Register;


@Repository
public class AdminstartiveDao {
 
	@Autowired 

	private SessionFactory sessionFactory;
	private Session session;
	private Transaction transaction;
	private Query<PizzaStoreBean> p;
	private Query<FoodBean> f;
	private Query<Register> r;
	private  Query<OrderBean> o;
	
	
	public  String registerUser(CredentialsBean user)
	{
		System.out.println("Under Dao "+user.getUserID()+" "+user.getPassword());
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		session.save(user);
		transaction.commit();
		session.close();
		return "SUCCESS";
	}
	public boolean authenticate(CredentialsBean user) 
	{
		System.out.println("Under Dao "+user.getUserID()+" "+user.getPassword());
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		Query q3=session.createQuery("from CredentialsBean where userID=:uid and password=:pss");
		q3.setParameter("uid", user.getUserID());
		q3.setParameter("pss", user.getPassword());
		ArrayList<CredentialsBean> al=(ArrayList<CredentialsBean>) q3.getResultList();
		int count=0;
		for(CredentialsBean cb:al)
		{
			if((cb.getUserID().equals(user.getUserID()))&&(cb.getPassword().equals(user.getPassword())))
			{
				System.out.println("Record is  present"+cb.getUserID()+" "+cb.getPassword());
				count++;
				if(count>0)
				{
		return true;
				}
				else
				{
					return false;
				}
			}
		}
		return false;
		
	}

	public String addFood(FoodBean foodBean) 
	{
		if(foodBean!=null)
		{
			session=sessionFactory.openSession();
			transaction=session.beginTransaction();
			session.save(foodBean);
			transaction.commit();
			session.close();
			return "SUCCESS";
		}
		else if(foodBean==null)
		{
			return "ERROR";
		}
		else
		{
			return "FAIL";
		}
	}
	
	public String updateFood(FoodBean foodBean)
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		if(foodBean!=null)
		{
		session.update(foodBean);

		transaction.commit();

		session.close();
		return "SUCCESS";
		}
		else if(foodBean==null)
		{
			return "FAIL";
		}
		else
		{
			return "ERROR";
		}
	}
	public String deleteFood(int foodID)
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		if(foodID>=0)
		{
		Query q1=session.createQuery("delete from FoodBean where foodID=:fid");
		q1.setParameter("fid", foodID);
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
	public ArrayList<FoodBean> viewFood()
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		f=session.createQuery("from FoodBean");
		return (ArrayList<FoodBean>) f.list();
	}
	public FoodBean viewFoodById(int foodID)
	{
		FoodBean fBean=new FoodBean();
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
	Query<FoodBean> q2=session.createQuery("from FoodBean where foodID=:fid");
	q2.setParameter("fid", foodID);
	ArrayList<FoodBean> all=(ArrayList<FoodBean>) q2.getResultList();
	for(FoodBean f1:all)
	{
		fBean=f1;
	}
	return fBean;
	}
	
	
	
	//////////////////////////PizzaaStoree/////////////
	public String addStore(PizzaStoreBean pizzaStoreBean) {
		if(pizzaStoreBean!=null)
		{
			session=sessionFactory.openSession();
			transaction=session.beginTransaction();
			session.save(pizzaStoreBean);
			transaction.commit();
			session.close();
			return "SUCCESS";
		}
		else if(pizzaStoreBean==null)
		{
			return "ERROR";
		}
		else
		{
			return "FAIL";
		}
	}
	public ArrayList<PizzaStoreBean> viewStore() {
		
			session=sessionFactory.openSession();
			transaction=session.beginTransaction();
			p=session.createQuery("from PizzaStoreBean");
			System.out.println((ArrayList<PizzaStoreBean>)p.list());
			return (ArrayList<PizzaStoreBean>)p.list();
		}
	public String updateStore(PizzaStoreBean pizzaStoreBean) {
		{
			session=sessionFactory.openSession();
			transaction=session.beginTransaction();
			if(pizzaStoreBean!=null)
			{
			session.update(pizzaStoreBean);

			transaction.commit();

			session.close();
			return "SUCCESS";
			}
			else if(pizzaStoreBean==null)
			{
				return "FAIL";
			}
			else
			{
				return "ERROR";
			}
		}
	}
	
	
	public String deleteStore(int storeID) {
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		if(storeID>=0)
		{
		Query q1=session.createQuery("delete from PizzaStoreBean where storeID=:sid");
		q1.setParameter("eid", storeID);
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
	public PizzaStoreBean viewStoreById(int storeID) {
		{
			PizzaStoreBean pBean=new PizzaStoreBean();
			session=sessionFactory.openSession();
			transaction=session.beginTransaction();
		Query<PizzaStoreBean> q2=session.createQuery("from PizzaStoreBean where storeID=:sid");
		q2.setParameter("sid", storeID);
		ArrayList<PizzaStoreBean> all=(ArrayList<PizzaStoreBean>) q2.getResultList();
		for(PizzaStoreBean p1:all)
		{
			pBean=p1;
		}
		return pBean;
		}
		
}
	
	   /////////////////OrderBean/////////////
	
	public String changeOrderStatus(int  orderID) {
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		if(orderID>=0)
		{
		Query q1=session.createQuery("Update from OrderBean where orderId=:oid");
		q1.setParameter("oid", orderID);
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

