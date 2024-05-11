import { createSlice } from "@reduxjs/toolkit";
import { DeleteProductData } from "../../service";
import { toast } from "react-toastify";

const deleteProductSlice = createSlice({
    name: "deleteProduct",
    initialState: {
        product: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(DeleteProductData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(DeleteProductData.fulfilled, (state, action) => {
            state.product = action.payload
            toast.success("Delete Product is completed.")
        })
        builder.addCase(DeleteProductData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default deleteProductSlice.reducer