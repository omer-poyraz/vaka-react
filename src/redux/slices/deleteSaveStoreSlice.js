import { createSlice } from "@reduxjs/toolkit";
import { DeleteSaveStoreData } from "../../service";
import { toast } from "react-toastify";

const deleteSaveStoreSlice = createSlice({
    name: "deleteSaveStore",
    initialState: {
        saveStoreSlice: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(DeleteSaveStoreData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(DeleteSaveStoreData.fulfilled, (state, action) => {
            state.saveStoreSlice = action.payload
            toast.success("Delete Save Store is completed.")
        })
        builder.addCase(DeleteSaveStoreData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default deleteSaveStoreSlice.reducer