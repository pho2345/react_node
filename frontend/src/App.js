import './App.css';
<<<<<<< HEAD
import Home from './page/Home/Home';
import Login from './components/Login/Login';
// import PrivateRoute from './Ultis/PrivateRoute';
// import PublicRoute from './Ultis/PublicRoute';
// import axios from 'axios';
// import { getToken, removeUserSession, setUserSession } from './Ultis/Common';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './page/UserList/UserList';
import User from './page/user/User';
import NewUser from './page/newUser/NewUser';
import ProductList from './page/productList/productList';
import Product from './page/product/Product';
import Index from './Index/Index';
import Test from './test';
=======
import Nav from './components/Nav';
import Home from './components/Home';
import Tweet from './components/Tweet';
import Data from './components/Data';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useEffect} from 'react';
import axiosClient  from './api/config';
>>>>>>> 77ddfa6 (api new)
function App() {

  useEffect( ()=> {
    async function getCity(params) {
      try {
        const value = await axiosClient.get(params);
        // let cities = value.value.map((e) => ({
        //   label: e.name,
        //   value: e._id,
        // }));
        console.log(value);
        //return cities;
      } catch (error) {
        return error;
      }
    }

    getCity('api/product');
  }, []);
  return (
    <div className="App">
      <Router>
      {/* <div className='container'> */}
            <Routes>
              <Route exact path="/" element={<Home/>}>
              </Route>
              <Route path="/login" element ={<Login />}>
              </Route>
              <Route path="/users" element={<UserList/>}>
              </Route>
              <Route path="/user/:userID" element={<User/>}>
              </Route>
              <Route path="/newUser" element={<NewUser/>}>
              </Route>
              <Route path="/products" element={<ProductList/>}>
              </Route>
              <Route path="/product/:productID" element={<Product/>}>
              </Route>
              <Route path="/newProduct" element={<ProductList/>}>
              </Route>
            </Routes>
      {/* </div> */}
    </Router> 
   <Test />
    </div>
  );
}
 
export default App;
