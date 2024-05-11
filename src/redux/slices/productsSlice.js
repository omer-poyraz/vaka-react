import { createSlice } from "@reduxjs/toolkit";
import { ProductsData } from "../../service";
import { toast } from "react-toastify";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(ProductsData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(ProductsData.fulfilled, (state, action) => {
            state.products = action.payload
        })
        builder.addCase(ProductsData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default productsSlice.reducer