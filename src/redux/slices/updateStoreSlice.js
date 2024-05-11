import { createSlice } from "@reduxjs/toolkit";
import { UpdateStoreData } from "../../service";
import { toast } from "react-toastify";

const updateStoreSlice = createSlice({
    name: "updateStore",
    initialState: {
        store: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(UpdateStoreData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(UpdateStoreData.fulfilled, (state, action) => {
            state.store = action.payload
            toast.success("Update Store is completed.")
        })
        builder.addCase(UpdateStoreData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default updateStoreSlice.reducer