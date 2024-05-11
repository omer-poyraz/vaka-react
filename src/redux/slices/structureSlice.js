import { createSlice } from "@reduxjs/toolkit";
import { StructureData } from "../../service";
import { toast } from "react-toastify";

const structureSlice = createSlice({
    name: "structure",
    initialState: {
        structure: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(StructureData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(StructureData.fulfilled, (state, action) => {
            state.structure = action.payload
        })
        builder.addCase(StructureData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default structureSlice.reducer