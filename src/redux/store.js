import { configureStore } from "@reduxjs/toolkit";
import routeSlice from "./slices/routeSlice";
import loginSlice from "./slices/loginSlice";
import registerSlice from "./slices/registerSlice";
import changePassSlice from "./slices/changePassSlice";
import createProductSlice from "./slices/createProductSlice";
import createRoomSlice from "./slices/createRoomSlice";
import createStoreSlice from "./slices/createStoreSlice";
import createStructureSlice from "./slices/createStructureSlice";
import createWorkOrderSlice from "./slices/createWorkOrderSlice";
import deleteProductSlice from "./slices/deleteProductSlice";
import deleteRoomSlice from "./slices/deleteRoomSlice";
import deleteStoreSlice from "./slices/deleteStoreSlice";
import deleteStructureSlice from "./slices/deleteStructureSlice";
import deleteUserSlice from "./slices/deleteUserSlice";
import deleteWorkOrderSlice from "./slices/deleteWorkOrderSlice";
import productsSlice from "./slices/productsSlice";
import productSlice from "./slices/productSlice";
import roomSlice from "./slices/roomSlice";
import roomsSlice from "./slices/roomsSlice";
import storeSlice from "./slices/storeSlice";
import storesSlice from "./slices/storesSlice";
import structureSlice from "./slices/structureSlice";
import structuresSlice from "./slices/structuresSlice";
import updateProductSlice from "./slices/updateProductSlice";
import updateRoomSlice from "./slices/updateRoomSlice";
import updateStoreSlice from "./slices/updateStoreSlice";
import updateStructureSlice from "./slices/updateStructureSlice";
import updateUserSlice from "./slices/updateUserSlice";
import updateWorkOrderSlice from "./slices/updateWorkOrderSlice";
import userSlice from "./slices/userSlice";
import usersSlice from "./slices/usersSlice";
import workOrderSlice from "./slices/workOrderSlice";
import workOrdersSlice from "./slices/workOrdersSlice";

export const Store = configureStore({
    reducer: {
        route: routeSlice,
        login: loginSlice,
        register: registerSlice,
        changePass: changePassSlice,
        createProduct: createProductSlice,
        createRoom: createRoomSlice,
        createStores: createStoreSlice,
        creataStructure: createStructureSlice,
        createWorkOrder: createWorkOrderSlice,
        deleteProduct: deleteProductSlice,
        deleteRoom: deleteRoomSlice,
        deleteStore: deleteStoreSlice,
        deleteStructure: deleteStructureSlice,
        deleteUser: deleteUserSlice,
        deleteWorkOrder: deleteWorkOrderSlice,
        products: productsSlice,
        product: productSlice,
        room: roomSlice,
        rooms: roomsSlice,
        store: storeSlice,
        stores: storesSlice,
        structure: structureSlice,
        structures: structuresSlice,
        updateProduct: updateProductSlice,
        updateRoom: updateRoomSlice,
        updateStore: updateStoreSlice,
        updateStructure: updateStructureSlice,
        updateUser: updateUserSlice,
        updateWorkOrder: updateWorkOrderSlice,
        user: userSlice,
        users: usersSlice,
        workOrder: workOrderSlice,
        workOrders: workOrdersSlice
    }
})