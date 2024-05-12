import { createSlice } from "@reduxjs/toolkit";
import { ProductWorkOrdersData } from "../../service";
import { toast } from "react-toastify";

const productWorkOrdersSlice = createSlice({
    name: "productWorkOrders",
    initialState: {
        productWorkOrders: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(ProductWorkOrdersData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(ProductWorkOrdersData.fulfilled, (state, action) => {
            state.productWorkOrders = action.payload
        })
        builder.addCase(ProductWorkOrdersData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default productWorkOrdersSlice.reducer