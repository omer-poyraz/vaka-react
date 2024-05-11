import { createSlice } from "@reduxjs/toolkit";
import { CreateProductData } from "../../service";
import { toast } from "react-toastify";

const createProductSlice = createSlice({
    name: "createProduct",
    initialState: {
        product: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(CreateProductData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(CreateProductData.fulfilled, (state, action) => {
            state.product = action.payload
            toast.success("Create Product is completed.")
        })
        builder.addCase(CreateProductData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default createProductSlice.reducer