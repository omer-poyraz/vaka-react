import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../../service";
import { toast } from "react-toastify";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(UsersData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(UsersData.fulfilled, (state, action) => {
            state.users = action.payload
        })
        builder.addCase(UsersData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default usersSlice.reducer