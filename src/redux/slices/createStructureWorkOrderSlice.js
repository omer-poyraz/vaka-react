import { createSlice } from "@reduxjs/toolkit";
import { CreateStructureWorkOrderData } from "../../service";
import { toast } from "react-toastify";

const createStructureWorkOrderSlice = createSlice({
    name: "createStructureWorkOrder",
    initialState: {
        structureWorkOrder: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(CreateStructureWorkOrderData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(CreateStructureWorkOrderData.fulfilled, (state, action) => {
            state.structureWorkOrder = action.payload
            toast.success("Create Structure Work Order is completed.")
        })
        builder.addCase(CreateStructureWorkOrderData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default createStructureWorkOrderSlice.reducer