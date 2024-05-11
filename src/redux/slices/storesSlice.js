import { createSlice } from "@reduxjs/toolkit";
import { StoresData } from "../../service";
import { toast } from "react-toastify";

const storesSlice = createSlice({
    name: "stores",
    initialState: {
        stores: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(StoresData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(StoresData.fulfilled, (state, action) => {
            state.stores = action.payload
        })
        builder.addCase(StoresData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default storesSlice.reducer