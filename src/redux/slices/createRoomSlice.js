import { createSlice } from "@reduxjs/toolkit";
import { CreateRoomData } from "../../service";
import { toast } from "react-toastify";

const createRoomSlice = createSlice({
    name: "createRoom",
    initialState: {
        room: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(CreateRoomData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(CreateRoomData.fulfilled, (state, action) => {
            state.room = action.payload
            toast.success("Create Room is completed.")
        })
        builder.addCase(CreateRoomData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default createRoomSlice.reducer