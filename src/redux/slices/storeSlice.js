import { createSlice } from "@reduxjs/toolkit";
import { StoreData } from "../../service";
import { toast } from "react-toastify";

const storeSlice = createSlice({
    name: "store",
    initialState: {
        store: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(StoreData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(StoreData.fulfilled, (state, action) => {
            state.store = action.payload
        })
        builder.addCase(StoreData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default storeSlice.reducer