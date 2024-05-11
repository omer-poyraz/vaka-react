import { createSlice } from "@reduxjs/toolkit";
import { DeleteRoomData } from "../../service";
import { toast } from "react-toastify";

const deleteRoomSlice = createSlice({
    name: "deleteRoom",
    initialState: {
        room: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(DeleteRoomData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(DeleteRoomData.fulfilled, (state, action) => {
            state.room = action.payload
            toast.success("Delete Room is completed.")
        })
        builder.addCase(DeleteRoomData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default deleteRoomSlice.reducer