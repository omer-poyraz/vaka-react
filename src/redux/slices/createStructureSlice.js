import { createSlice } from "@reduxjs/toolkit";
import { CreateStructureData } from "../../service";
import { toast } from "react-toastify";

const createStructureSlice = createSlice({
    name: "createStructure",
    initialState: {
        structure: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(CreateStructureData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(CreateStructureData.fulfilled, (state, action) => {
            state.structure = action.payload
            toast.success("Create Structure is completed.")
        })
        builder.addCase(CreateStructureData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default createStructureSlice.reducer