import { createSlice } from "@reduxjs/toolkit";

const routeSlice = createSlice({
    name: "route",
    initialState: {
        id: 1,
        productId: 0,
        roomId: 0,
        storeId: 0,
        structureId: 0
    },
    reducers: {
        changePage(state, action) {
            state.id = action.payload.id
        },
        selectProduct(state, action) {
            state.productId = action.payload.id
        },
        selectRoom(state, action) {
            state.roomId = action.payload.id
        },
        selectStore(state, action) {
            state.storeId = action.payload.id
        },
        selectStructure(state, action) {
            state.structureId = action.payload.id
        }
    }
})

export const { changePage, selectProduct, selectRoom, selectStore, selectStructure } = routeSlice.actions
export default routeSlice.reducer