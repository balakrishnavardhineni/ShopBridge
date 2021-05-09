import AjaxUtils from "../Utils/AjaxUtils";

import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

import "../styles/Components/inventory.css";
import AppBar from "./AppBar";
import BasicCard from "./BasicCard";
import { connect } from "react-redux";
import {
  fetchProducts,
  handleUpdateProduct
} from "../Redux/Actions/productActions";

function Inventory(props) {
  console.log(props);
  const [state, setState] = useState({});
  useEffect(() => {
    setState({ products: [...props.products] });
    return () => {};
  }, [props.products]);

  let productCards = [];
  let { products = [] } = state;
  products.length > 0 &&
    products.forEach((product, idx) => {
      productCards.push(
        <BasicCard
          productData={product}
          key={idx}
          cardClassName="card-product"
          {...props.history}
        />
      );
    });
  console.log(state, productCards, products);

  const handleFetchProducts = () => props.fetchProducts();

  const handleAddProduct = () => props.history.push("/add/product");

  return (
    <div className="products-list-container">
      <AppBar title={"Inventory"} />

      <div className="products-list">
        <div className="fetch-button">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleFetchProducts()}
          >
            Fetch Products
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleAddProduct()}
          >
            Add Product
          </Button>
        </div>
        <div className="products-card-list">
          {productCards.length > 0 && productCards}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    products: store.products
  };
};

export default connect(mapStateToProps, { fetchProducts })(Inventory);
