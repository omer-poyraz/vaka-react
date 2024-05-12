import { createSlice } from "@reduxjs/toolkit";
import { DeleteProductRoomData } from "../../service";
import { toast } from "react-toastify";

const deleteProductRoomsSlice = createSlice({
    name: "deleteProductRoom",
    initialState: {
        productRoom: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(DeleteProductRoomData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(DeleteProductRoomData.fulfilled, (state, action) => {
            state.productRoom = action.payload
            toast.success("Delete Product Room is completed.")
        })
        builder.addCase(DeleteProductRoomData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default deleteProductRoomsSlice.reducer