import { createSlice } from "@reduxjs/toolkit";
import { DeleteWorkOrderData } from "../../service";
import { toast } from "react-toastify";

const deleteWorkOrderSlice = createSlice({
    name: "deleteWorkOrder",
    initialState: {
        work: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(DeleteWorkOrderData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(DeleteWorkOrderData.fulfilled, (state, action) => {
            state.work = action.payload
            toast.success("Delete Work Order is completed.")
        })
        builder.addCase(DeleteWorkOrderData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default deleteWorkOrderSlice.reducer