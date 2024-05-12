import { createSlice } from "@reduxjs/toolkit";
import { CreateSaveStoreData } from "../../service";
import { toast } from "react-toastify";

const createSaveStoreSlice = createSlice({
    name: "createSaveStore",
    initialState: {
        saveStore: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(CreateSaveStoreData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(CreateSaveStoreData.fulfilled, (state, action) => {
            state.saveStore = action.payload
            toast.success("Create Save Store is completed.")
        })
        builder.addCase(CreateSaveStoreData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default createSaveStoreSlice.reducer