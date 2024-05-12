import { createSlice } from "@reduxjs/toolkit";
import { CreateStoreWorkOrderData } from "../../service";
import { toast } from "react-toastify";

const createStoreWorkOrderSlice = createSlice({
    name: "createStoreWorkOrder",
    initialState: {
        storeWorkOrder: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(CreateStoreWorkOrderData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(CreateStoreWorkOrderData.fulfilled, (state, action) => {
            state.storeWorkOrder = action.payload
            toast.success("Create Store Work Order is completed.")
        })
        builder.addCase(CreateStoreWorkOrderData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default createStoreWorkOrderSlice.reducer