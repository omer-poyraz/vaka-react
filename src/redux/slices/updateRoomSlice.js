import { createSlice } from "@reduxjs/toolkit";
import { UpdateRoomData } from "../../service";
import { toast } from "react-toastify";

const updateRoomSlice = createSlice({
    name: "updateRoom",
    initialState: {
        room: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(UpdateRoomData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(UpdateRoomData.fulfilled, (state, action) => {
            state.room = action.payload
            toast.success("Update Room is completed.")
        })
        builder.addCase(UpdateRoomData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default updateRoomSlice.reducer