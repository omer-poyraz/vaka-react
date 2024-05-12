import { createSlice } from "@reduxjs/toolkit";
import { RoomWorkOrdersData } from "../../service";
import { toast } from "react-toastify";

const roomWorkOrdersSlice = createSlice({
    name: "roomWorkOrders",
    initialState: {
        roomWorkOrders: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(RoomWorkOrdersData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(RoomWorkOrdersData.fulfilled, (state, action) => {
            state.roomWorkOrders = action.payload
        })
        builder.addCase(RoomWorkOrdersData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default roomWorkOrdersSlice.reducer