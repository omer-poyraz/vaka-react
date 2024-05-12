import { createSlice } from "@reduxjs/toolkit";
import { CreateProductStoreData, DeleteProductStoreData } from "../../service";
import { toast } from "react-toastify";

const deleteProductStoreSlice = createSlice({
    name: "deleteProductStore",
    initialState: {
        productStore: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(DeleteProductStoreData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(DeleteProductStoreData.fulfilled, (state, action) => {
            state.productStore = action.payload
            toast.success("Delete Product Store is completed.")
        })
        builder.addCase(DeleteProductStoreData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default deleteProductStoreSlice.reducer