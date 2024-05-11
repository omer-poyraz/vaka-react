import { createSlice } from "@reduxjs/toolkit";
import { ChangePassData } from "../../service";
import { toast } from "react-toastify";

const changePassSlice = createSlice({
    name: "changePass",
    initialState: {
        user: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(ChangePassData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(ChangePassData.fulfilled, (state, action) => {
            state.user = action.payload
            toast.success("Change password is completed.")
        })
        builder.addCase(ChangePassData.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.error)
            toast.error(action.error)
        })
    }
})

export default changePassSlice.reducer