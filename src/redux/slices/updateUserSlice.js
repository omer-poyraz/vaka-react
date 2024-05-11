import { createSlice } from "@reduxjs/toolkit";
import { UpdateUserData } from "../../service";
import { toast } from "react-toastify";

const updateUserSlice = createSlice({
    name: "updateUser",
    initialState: {
        user: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(UpdateUserData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(UpdateUserData.fulfilled, (state, action) => {
            state.user = action.payload
            toast.success("Update User is completed.")
        })
        builder.addCase(UpdateUserData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default updateUserSlice.reducer