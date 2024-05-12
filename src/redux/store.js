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
import productWorkOrdersSlice from "./slices/productWorkOrdersSlice";
import roomWorkOrdersSlice from "./slices/roomWorkOrdersSlice";
import storeWorkOrdersSlice from "./slices/storeWorkOrdersSlice";
import structureWorkOrdersSlice from "./slices/structureWorkOrdersSlice";
import createProductWorkOrderSlice from "./slices/createProductWorkOrderSlice";
import createRoomWorkOrderSlice from "./slices/createRoomWorkOrderSlice";
import createStoreWorkOrderSlice from "./slices/createStoreWorkOrderSlice";
import createStructureWorkOrderSlice from "./slices/createStructureWorkOrderSlice";
import productRoomSlice from "./slices/productRoomSlice";
import productRoomsSlice from "./slices/productRoomsSlice";
import createProductRoomSlice from "./slices/createProductRoomSlice";
import deleteProductRoomSlice from "./slices/deleteProductRoomSlice";
import productStoresSlice from "./slices/productStoresSlice";
import productStoreSlice from "./slices/productStoreSlice";
import createProductStoreSlice from "./slices/createProductStoreSlice";
import deleteProductStoreSlice from "./slices/deleteProductStoreSlice";
import roomStructureSlice from "./slices/roomStructureSlice";
import storeStructureSlice from "./slices/storeStructureSlice";
import saveStoresSlice from "./slices/saveStoresSlice";
import saveStoreSlice from "./slices/saveStoreSlice";
import createSaveStoreSlice from "./slices/createSaveStoreSlice";
import updateSaveStoreSlice from "./slices/updateSaveStoreSlice";
import deleteSaveStoreSlice from "./slices/deleteSaveStoreSlice";

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
        createProductWorkOrder: createProductWorkOrderSlice,
        createRoomWorkOrder: createRoomWorkOrderSlice,
        createStoreWorkOrder: createStoreWorkOrderSlice,
        createStructureWorkOrder: createStructureWorkOrderSlice,
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
        workOrders: workOrdersSlice,
        productWorkOrders: productWorkOrdersSlice,
        roomWorkOrders: roomWorkOrdersSlice,
        storeWorkOrders: storeWorkOrdersSlice,
        structureWorkOrders: structureWorkOrdersSlice,
        productRooms: productRoomsSlice,
        productRoom: productRoomSlice,
        createProductRoom: createProductRoomSlice,
        deleteProductRoom: deleteProductRoomSlice,
        productStores: productStoresSlice,
        productStore: productStoreSlice,
        createProductStore: createProductStoreSlice,
        deleteProductStore: deleteProductStoreSlice,
        roomStructure: roomStructureSlice,
        storeStructure: storeStructureSlice,
        saveStores: saveStoresSlice,
        saveStore: saveStoreSlice,
        createSaveStore: createSaveStoreSlice,
        updateSaveStore: updateSaveStoreSlice,
        deleteSaveStore: deleteSaveStoreSlice
    }
})