import React, { createContext, useContext } from "react";

const API = "http://34.173.115.25/api/v1";

export const productContext = createContext();

export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  categories: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
  }
}

const ProductContextProvider = ({ children }) => {
  const values = {};
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
