import { createSlice } from "@reduxjs/toolkit";
import { StoreWorkOrdersData } from "../../service";
import { toast } from "react-toastify";

const storeWorkOrdersSlice = createSlice({
    name: "storeWorkOrders",
    initialState: {
        storeWorkOrders: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(StoreWorkOrdersData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(StoreWorkOrdersData.fulfilled, (state, action) => {
            state.storeWorkOrders = action.payload
        })
        builder.addCase(StoreWorkOrdersData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default storeWorkOrdersSlice.reducer