import { createSlice } from "@reduxjs/toolkit";
import { UpdateSaveStoreData } from "../../service";
import { toast } from "react-toastify";

const updateSaveStoreSlice = createSlice({
    name: "updateSaveStore",
    initialState: {
        saveStore: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(UpdateSaveStoreData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(UpdateSaveStoreData.fulfilled, (state, action) => {
            state.saveStore = action.payload
            toast.success("Update Save Store is completed.")
        })
        builder.addCase(UpdateSaveStoreData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default updateSaveStoreSlice.reducer