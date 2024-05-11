import { createSlice } from "@reduxjs/toolkit";
import { DeleteStoreData } from "../../service";
import { toast } from "react-toastify";

const deleteStoreSlice = createSlice({
    name: "deleteStore",
    initialState: {
        store: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(DeleteStoreData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(DeleteStoreData.fulfilled, (state, action) => {
            state.store = action.payload
            toast.success("Delete Store is completed.")
        })
        builder.addCase(DeleteStoreData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default deleteStoreSlice.reducer