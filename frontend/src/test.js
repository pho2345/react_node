import './App.css';
import Home from './page/Home/Home';
import Login from './components/Login/Login';
// import PrivateRoute from './Ultis/PrivateRoute';
// import PublicRoute from './Ultis/PublicRoute';
// import axios from 'axios';
// import { getToken, removeUserSession, setUserSession } from './Ultis/Common';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import UserList from './page/UserList/UserList';
import User from './page/user/User';
import NewUser from './page/newUser/NewUser';
import ProductList from './page/productList/productList';
import Product from './page/product/Product';
import Index from './Index/Index';
const Test = () => {
  return (
        <Router>
      <Routes>
      <Route path="/index" element ={<Index/>}></Route>
      </Routes>
      </Router>    
  );
}
export default Test;
 