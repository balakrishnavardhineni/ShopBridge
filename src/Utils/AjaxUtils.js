import axios from "axios";

const api = axios.create({
  baseURL: "http://makeup-api.herokuapp.com/api/v1/"
});

// const insertProduct = (payload) => api.post(`/products`, payload);
const getAllProducts = () => api.get(`/products.json/?brand=maybelline`);
// const updateProductByEmail = (email, payload) =>
//   api.put(`/products/${email}`, payload);
// const deleteProductById = (id) => api.delete(`/products/${id}`);
// const getProductById = (id) => api.get(`/products/${id}`);

const AjaxUtils = {
  getAllProducts
};

export default AjaxUtils;
