import { createSlice } from "@reduxjs/toolkit";
import { UpdateStructureData } from "../../service";
import { toast } from "react-toastify";

const updateStructureSlice = createSlice({
    name: "updateStructure",
    initialState: {
        structure: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(UpdateStructureData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(UpdateStructureData.fulfilled, (state, action) => {
            state.structure = action.payload
            toast.success("Update Structure is completed.")
        })
        builder.addCase(UpdateStructureData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default updateStructureSlice.reducer