import { createSlice } from "@reduxjs/toolkit";
import { StructuresData } from "../../service";
import { toast } from "react-toastify";

const structuresSlice = createSlice({
    name: "structures",
    initialState: {
        structures: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(StructuresData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(StructuresData.fulfilled, (state, action) => {
            state.structures = action.payload
        })
        builder.addCase(StructuresData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default structuresSlice.reducer