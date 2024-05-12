import { createSlice } from "@reduxjs/toolkit";
import { ProductStoreData } from "../../service";
import { toast } from "react-toastify";

const productStoreSlice = createSlice({
    name: "productStore",
    initialState: {
        productStore: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(ProductStoreData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(ProductStoreData.fulfilled, (state, action) => {
            state.productStore = action.payload
        })
        builder.addCase(ProductStoreData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default productStoreSlice.reducer