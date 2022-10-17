import './App.css';
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
function App() {
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
