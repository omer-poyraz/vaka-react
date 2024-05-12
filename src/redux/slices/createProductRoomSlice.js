import { createSlice } from "@reduxjs/toolkit";
import { CreateProductRoomData } from "../../service";
import { toast } from "react-toastify";

const createProductRoomsSlice = createSlice({
    name: "createProductRoom",
    initialState: {
        productRoom: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(CreateProductRoomData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(CreateProductRoomData.fulfilled, (state, action) => {
            state.productRoom = action.payload
            toast.success("Create Product Room is completed.")
        })
        builder.addCase(CreateProductRoomData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default createProductRoomsSlice.reducer