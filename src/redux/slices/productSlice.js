import { createSlice } from "@reduxjs/toolkit";
import { ProductData } from "../../service";
import { toast } from "react-toastify";

const productSlice = createSlice({
    name: "product",
    initialState: {
        product: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(ProductData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(ProductData.fulfilled, (state, action) => {
            state.product = action.payload
        })
        builder.addCase(ProductData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default productSlice.reducer