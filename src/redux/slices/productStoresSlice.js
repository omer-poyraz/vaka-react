import { createSlice } from "@reduxjs/toolkit";
import { ProductStoresData } from "../../service";
import { toast } from "react-toastify";

const productStoresSlice = createSlice({
    name: "productStores",
    initialState: {
        productStores: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(ProductStoresData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(ProductStoresData.fulfilled, (state, action) => {
            state.productStores = action.payload
        })
        builder.addCase(ProductStoresData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default productStoresSlice.reducer