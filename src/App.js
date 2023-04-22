import './App.css';
import FoodBean from './components/FoodBean';
import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from './components/Login';
import Appbar from './components/Appbar';
import Register from './components/Register';
import ProfileBean from './components/ProfileBean';
import PizzaOrderingSystem from './components/PizzaOrderingSystem';
import DeleteFood from './components/Deletefood';
import StoreAdd from './components/StoreAdd';
import Creditcardbean from './components/Creditcardbean';
import ModifyFood from './components/ModifyFood';
import StoreView from './components/StoreView';
import Viewfood from './components/Viewfood';
import CartView from './components/CartView';
import UpdateStore from './components/UpdateStore';
import StoreDelete from './components/StoreDelete';
import Removefood from './components/Removefood';
    function App() {
        return (
         
            <Router>
                
                <Switch>
                <Route exact path="/">
                      <Login/>
                    </Route>

                    {/* AddFoodBean AD001-AD004 */}
                    <Route path="/FoodBean">
                        <FoodBean/>
                    </Route>
                    <Route path="/ModifyFood">
                        <ModifyFood/>
                    </Route>

                    <Route path="/Viewfood">
                        <Viewfood/>
                    </Route>

                    
                    <Route path="/DeleteFood">
                        <DeleteFood/>
                    </Route>
                    <Route path="/Login">
                    <Login/>
                    </Route>
                    <Route path="/Register">
                        <Register/>
                    </Route>
                    
                    {/* pizzahaStoreAdd AD005-AD008*/}

                    <Route path="/StoreAdd">
                        <StoreAdd/>
                    </Route>
                    <Route path="/StoreView">
                        <StoreView/>
                    </Route>
                    <Route path="/UpdateStore">
                        <UpdateStore/>
                    </Route>
                    <Route path="/StoreDelete">
                        <StoreDelete/>
                    </Route>
                     

                    <Route path="/Removefood">
                        <Removefood/>
                    </Route>

                    
                    



       

                 {/* user US001-US-006*/}


                    <Route path="/ProfileBean">
                        <ProfileBean/>
                    </Route>
                    <Route path="/PizzaOrderingSystem">
                    <PizzaOrderingSystem/>
                    </Route>
                   < Route path="/CartView">
                    <CartView/>
                    </Route>

                    <Route path="/Creditcardbean">
                        <Creditcardbean/>
                    </Route>
                </Switch>
            </Router>
    
   
        )
    }
export default App;
