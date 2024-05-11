import { createSlice } from "@reduxjs/toolkit";
import { WorkOrderData } from "../../service";
import { toast } from "react-toastify";

const workOrderSlice = createSlice({
    name: "workOrder",
    initialState: {
        work: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(WorkOrderData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(WorkOrderData.fulfilled, (state, action) => {
            state.work = action.payload
        })
        builder.addCase(WorkOrderData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default workOrderSlice.reducer