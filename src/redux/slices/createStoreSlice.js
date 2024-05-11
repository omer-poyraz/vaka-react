import { createSlice } from "@reduxjs/toolkit";
import { CreateStoreData } from "../../service";
import { toast } from "react-toastify";

const createStoreSlice = createSlice({
    name: "createStores",
    initialState: {
        store: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(CreateStoreData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(CreateStoreData.fulfilled, (state, action) => {
            state.store = action.payload
            toast.success("Create Store is completed.")
        })
        builder.addCase(CreateStoreData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default createStoreSlice.reducer