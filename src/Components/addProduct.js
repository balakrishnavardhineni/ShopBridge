import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AppBar from "./AppBar";
import "../styles/Components/addProduct.css";
import {
  handleAddProduct,
  handleUpdateProduct
} from "../Redux/Actions/productActions";
import { connect } from "react-redux";

function addProduct(props) {
  console.log(props);
  const [state, setState] = useState({
    name: "",
    price: "",
    description: "",
    id: ""
  });
  let { location = {} } = props;
  let { name = "", description = "", price = "", id = "" } = location.state
    ? location.state
    : {};
  let isUpdate = name.length > 0;

  useEffect(() => {
    setState({ name, description, price });
  }, [location]);

  const handleAdd = () => {
    props.products && props.products.length > 0
      ? setState({
          ...state,
          id: props.products[props.products.length - 1].id + 1
        })
      : "";
    props.handleAddProduct(state);
    props.history.push("/");
  };

  const handleUpdate = () => {
    props.handleUpdateProduct(id, state);
    props.history.push("/");
  };

  console.log(state);
  return (
    <div className="add-product">
      <AppBar title={!isUpdate ? "Add Product" : "Update Product"} />
      <form>
        <div className="container">
          <h1>{!isUpdate ? "Add Product" : "Update Product"}</h1>
          <label htmlFor="product">
            <b>Name</b>
          </label>

          <input
            type="text"
            placeholder="Enter Name of the Product"
            name="product"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            required
          />

          <label htmlFor="price">
            <b>Price ($)</b>
          </label>
          <input
            placeholder="Enter Price"
            name="price"
            type="number"
            required
            onChange={(e) => setState({ ...state, price: e.target.value })}
            value={state.price}
          />
          <label htmlFor="desc">
            <b>Description</b>
          </label>
          <input
            placeholder="Enter Description here..."
            name="desc"
            type="text-area"
            onChange={(e) =>
              setState({ ...state, description: e.target.value })
            }
            value={state.description}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={() => (!isUpdate ? handleAdd() : handleUpdate())}
          >
            {!isUpdate ? "Add Product" : "Update Product"}
          </Button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (store) => {
  return { products: store.products };
};
export default connect(mapStateToProps, {
  handleAddProduct,
  handleUpdateProduct
})(addProduct);
