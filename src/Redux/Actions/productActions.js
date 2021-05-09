import AjaxUtils from "../../Utils/AjaxUtils";
import constants from "../Constants/constants";
const addProductsAction = (data) => ({
  type: constants.ADD_PRODUCTS,
  payload: data
});
const addProductAction = (data) => ({
  type: constants.ADD_PRODUCT,
  payload: data
});
const updateProductAction = (id, data) => ({
  type: constants.UPDATE_PRODUCT,
  payload: data,
  id
});
const deleteProductAction = (id) => ({
  type: constants.DELETE_PRODUCT,
  id
});

const fetchProducts = () => {
  return (dispatch) => {
    AjaxUtils.getAllProducts()
      .then(async (response) => {
        const res = await response.data;
        dispatch(addProductsAction(res));
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
};

const handleUpdateProduct = (id, data) => (dispatch) =>
  dispatch(updateProductAction(id, data));

const handleDeleteProduct = (id, data) => (dispatch) =>
  dispatch(deleteProductAction(id, data));

const handleAddProduct = (data) => (dispatch) =>
  dispatch(addProductAction(data));

export {
  fetchProducts,
  handleUpdateProduct,
  handleAddProduct,
  handleDeleteProduct
};
