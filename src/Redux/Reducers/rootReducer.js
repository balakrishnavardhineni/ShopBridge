import constant from "../Constants/constants";

const initialState = {
  products: []
};

export default function rootReducer(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case constant.ADD_PRODUCTS:
      return {
        ...state,
        products: [...action.payload, ...state.products]
      };
    case constant.ADD_PRODUCT:
      state.products.unshift(action.payload);
      return {
        ...state
      };

    case constant.UPDATE_PRODUCT:
      console.log(action);
      let updatedProducts = [];
      let { name = "", description = "", price = "" } = action.payload;
      state.products.forEach((obj) => {
        obj.id == action.id
          ? updatedProducts.push({
              ...obj,
              name,
              description,
              price
            })
          : updatedProducts.push(obj);
      });
      return {
        ...state,
        products: updatedProducts
      };
    case constant.DELETE_PRODUCT:
      let products = state.products.filter((obj) => obj.id != action.id);
      console.log(products);
      return {
        products
      };
    default:
      return state;
  }
}
