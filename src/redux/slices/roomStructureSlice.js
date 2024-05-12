import { createSlice } from "@reduxjs/toolkit";
import { RoomStructureData } from "../../service";
import { toast } from "react-toastify";

const roomStructureSlice = createSlice({
    name: "roomStructure",
    initialState: {
        roomStructure: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(RoomStructureData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(RoomStructureData.fulfilled, (state, action) => {
            state.roomStructure = action.payload
        })
        builder.addCase(RoomStructureData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default roomStructureSlice.reducer