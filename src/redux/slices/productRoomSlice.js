import { createSlice } from "@reduxjs/toolkit";
import { ProductRoomData, ProductRoomsData } from "../../service";
import { toast } from "react-toastify";

const productRoomSlice = createSlice({
    name: "productRoom",
    initialState: {
        productRoom: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(ProductRoomData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(ProductRoomData.fulfilled, (state, action) => {
            state.productRoom = action.payload
        })
        builder.addCase(ProductRoomData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default productRoomSlice.reducer