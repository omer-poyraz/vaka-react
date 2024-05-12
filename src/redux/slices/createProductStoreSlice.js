import { createSlice } from "@reduxjs/toolkit";
import { CreateProductStoreData } from "../../service";
import { toast } from "react-toastify";

const createProductStoreSlice = createSlice({
    name: "createProductStore",
    initialState: {
        productStore: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(CreateProductStoreData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(CreateProductStoreData.fulfilled, (state, action) => {
            state.productStore = action.payload
            toast.success("Create Product Store is completed.")
        })
        builder.addCase(CreateProductStoreData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default createProductStoreSlice.reducer