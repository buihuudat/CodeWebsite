import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import User from "./pages/user/User";
import UserList from "./components/userList/UserList";
import NewUser from "./pages/newuser/NewUser";
import Product from "./components/product/Product";
import ProductList from "./components/productList/ProductList";
import NewProduct from "./components/newProduct/NewProduct";

import "./app.css";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user" element={<UserList />} />
          <Route exact path="/user/:userId" element={<User />} />
          <Route exact path="/newUser" element={<NewUser />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/products/:productId" element={<Product />} />
          <Route exact path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
