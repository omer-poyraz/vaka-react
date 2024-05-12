import { createSlice } from "@reduxjs/toolkit";
import { ProductRoomsData } from "../../service";
import { toast } from "react-toastify";

const productRoomsSlice = createSlice({
    name: "productRooms",
    initialState: {
        productRooms: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(ProductRoomsData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(ProductRoomsData.fulfilled, (state, action) => {
            state.productRooms = action.payload
        })
        builder.addCase(ProductRoomsData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default productRoomsSlice.reducer