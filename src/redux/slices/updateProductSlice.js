import { createSlice } from "@reduxjs/toolkit";
import { UpdateProductData } from "../../service";
import { toast } from "react-toastify";

const updateProductSlice = createSlice({
    name: "updateProduct",
    initialState: {
        product: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(UpdateProductData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(UpdateProductData.fulfilled, (state, action) => {
            state.product = action.payload
            toast.success("Update Product is completed.")
        })
        builder.addCase(UpdateProductData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default updateProductSlice.reducer