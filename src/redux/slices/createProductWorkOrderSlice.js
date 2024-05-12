import { createSlice } from "@reduxjs/toolkit";
import { CreateProductWorkOrderData } from "../../service";
import { toast } from "react-toastify";

const createProductWorkOrderSlice = createSlice({
    name: "createProductWorkOrder",
    initialState: {
        productWorkOrder: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(CreateProductWorkOrderData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(CreateProductWorkOrderData.fulfilled, (state, action) => {
            state.productWorkOrder = action.payload
            toast.success("Create Product Work Order is completed.")
        })
        builder.addCase(CreateProductWorkOrderData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default createProductWorkOrderSlice.reducer