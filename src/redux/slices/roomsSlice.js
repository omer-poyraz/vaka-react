import { createSlice } from "@reduxjs/toolkit";
import { RoomsData } from "../../service";
import { toast } from "react-toastify";

const roomsSlice = createSlice({
    name: "rooms",
    initialState: {
        rooms: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(RoomsData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(RoomsData.fulfilled, (state, action) => {
            state.rooms = action.payload
        })
        builder.addCase(RoomsData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default roomsSlice.reducer