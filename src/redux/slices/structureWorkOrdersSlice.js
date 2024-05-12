import { createSlice } from "@reduxjs/toolkit";
import { StructureWorkOrdersData } from "../../service";
import { toast } from "react-toastify";

const structureWorkOrdersSlice = createSlice({
    name: "structureWorkOrders",
    initialState: {
        structureWorkOrders: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(StructureWorkOrdersData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(StructureWorkOrdersData.fulfilled, (state, action) => {
            state.structureWorkOrders = action.payload
        })
        builder.addCase(StructureWorkOrdersData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default structureWorkOrdersSlice.reducer