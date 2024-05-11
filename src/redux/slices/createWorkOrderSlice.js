import { createSlice } from "@reduxjs/toolkit";
import { CreateWorkOrderData } from "../../service";
import { toast } from "react-toastify";

const createWorkOrderSlice = createSlice({
    name: "createWorkOrder",
    initialState: {
        work: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(CreateWorkOrderData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(CreateWorkOrderData.fulfilled, (state, action) => {
            state.work = action.payload
            toast.success("Create Work Order is completed.")
        })
        builder.addCase(CreateWorkOrderData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default createWorkOrderSlice.reducer