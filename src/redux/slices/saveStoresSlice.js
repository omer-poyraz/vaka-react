import { createSlice } from "@reduxjs/toolkit";
import { SaveStoresData } from "../../service";
import { toast } from "react-toastify";

const saveStoresSlice = createSlice({
    name: "saveStores",
    initialState: {
        saveStore: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(SaveStoresData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(SaveStoresData.fulfilled, (state, action) => {
            state.saveStore = action.payload
        })
        builder.addCase(SaveStoresData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default saveStoresSlice.reducer