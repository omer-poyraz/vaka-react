import { createSlice } from "@reduxjs/toolkit";
import { StoreStructureData } from "../../service";
import { toast } from "react-toastify";

const storeStructureSlice = createSlice({
    name: "storeStructure",
    initialState: {
        storeStructure: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(StoreStructureData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(StoreStructureData.fulfilled, (state, action) => {
            state.storeStructure = action.payload
        })
        builder.addCase(StoreStructureData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default storeStructureSlice.reducer