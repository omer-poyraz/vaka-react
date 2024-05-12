import { createSlice } from "@reduxjs/toolkit";
import { CreateRoomWorkOrderData } from "../../service";
import { toast } from "react-toastify";

const createRoomWorkOrderSlice = createSlice({
    name: "createRoomWorkOrder",
    initialState: {
        roomWorkOrder: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(CreateRoomWorkOrderData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(CreateRoomWorkOrderData.fulfilled, (state, action) => {
            state.roomWorkOrder = action.payload
            toast.success("Create Room Work Order is completed.")
        })
        builder.addCase(CreateRoomWorkOrderData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default createRoomWorkOrderSlice.reducer