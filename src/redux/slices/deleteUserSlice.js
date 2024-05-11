import { createSlice } from "@reduxjs/toolkit";
import { DeleteUserData } from "../../service";
import { toast } from "react-toastify";

const deleteUserSlice = createSlice({
    name: "deleteUser",
    initialState: {
        user: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(DeleteUserData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(DeleteUserData.fulfilled, (state, action) => {
            state.user = action.payload
            toast.success("Delete User is completed.")
        })
        builder.addCase(DeleteUserData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default deleteUserSlice.reducer