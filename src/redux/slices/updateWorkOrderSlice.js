import { createSlice } from "@reduxjs/toolkit";
import { UpdateWorkOrderData } from "../../service";
import { toast } from "react-toastify";

const updateWorkOrderSlice = createSlice({
    name: "updateWorkOrder",
    initialState: {
        work: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(UpdateWorkOrderData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(UpdateWorkOrderData.fulfilled, (state, action) => {
            state.work = action.payload
            toast.success("Update Work Order is completed.")
        })
        builder.addCase(UpdateWorkOrderData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default updateWorkOrderSlice.reducer