import { createSlice } from "@reduxjs/toolkit";
import { SaveStoreData } from "../../service";
import { toast } from "react-toastify";

const saveStoreSlice = createSlice({
    name: "saveStore",
    initialState: {
        saveStore: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(SaveStoreData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(SaveStoreData.fulfilled, (state, action) => {
            state.saveStore = action.payload
        })
        builder.addCase(SaveStoreData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default saveStoreSlice.reducer