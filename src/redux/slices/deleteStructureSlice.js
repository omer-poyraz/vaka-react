import { createSlice } from "@reduxjs/toolkit";
import { DeleteStructureData } from "../../service";
import { toast } from "react-toastify";

const deleteStructureSlice = createSlice({
    name: "deleteStructure",
    initialState: {
        structure: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(DeleteStructureData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(DeleteStructureData.fulfilled, (state, action) => {
            state.structure = action.payload
            toast.success("Delete Structure is completed.")
        })
        builder.addCase(DeleteStructureData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default deleteStructureSlice.reducer