import { createSlice } from "@reduxjs/toolkit";
import { WorkOrdersData } from "../../service";
import { toast } from "react-toastify";

const workOrdersSlice = createSlice({
    name: "workOrders",
    initialState: {
        works: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(WorkOrdersData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(WorkOrdersData.fulfilled, (state, action) => {
            state.works = action.payload
        })
        builder.addCase(WorkOrdersData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default workOrdersSlice.reducer