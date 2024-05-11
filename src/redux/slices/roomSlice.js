import { createSlice } from "@reduxjs/toolkit";
import { RoomData } from "../../service";
import { toast } from "react-toastify";

const roomSlice = createSlice({
    name: "room",
    initialState: {
        room: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(RoomData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(RoomData.fulfilled, (state, action) => {
            state.room = action.payload
        })
        builder.addCase(RoomData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default roomSlice.reducer