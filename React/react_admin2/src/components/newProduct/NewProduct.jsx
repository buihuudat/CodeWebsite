import "./newproduct.css";
import { Link } from "react-router-dom";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <div className="addProductTop">
        <h1 className="addProductTitle">New Product</h1>
        <Link to="/products"><button  className="addProductLink">Products</button></Link>
      </div>
      <form action="" className="addProductForm">
        <div className="addProductItem">
          <label htmlFor="">Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label htmlFor="">Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label htmlFor="">Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  )
}