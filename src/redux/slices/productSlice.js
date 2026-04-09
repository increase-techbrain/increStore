import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../../Data/product.json";

const initialState = {
    allProducts: ProductData,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{}
});

export default productSlice.reducer;
