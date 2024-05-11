import axios from "axios"
import api from "../api"
import { createAsyncThunk } from "@reduxjs/toolkit"

var id = localStorage.getItem("userId")
var token = localStorage.getItem("token")

export const LoginData = createAsyncThunk("LoginData", async ({ userName, password }) => {
    const result = await axios.post(api.Login, { userName: userName, password: password })
        .then(res => res.data)
    return result
})

export const RegisterData = createAsyncThunk("RegisterData", async ({ firstName, lastName, userName, email, phoneNumber, password }) => {
    const result = await axios.post(api.Register, { firstName: firstName, lastName: lastName, userName: userName, email: email, phoneNumber: phoneNumber, password: password, roles: ["User"] })
        .then(res => res.data)
    return result
})

export const ProductsData = createAsyncThunk("ProductsData", async () => {
    const result = await axios.get(`${api.Products}?PageNumber=1&PageSize=50`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const ProductData = createAsyncThunk("ProductData", async ({ proId }) => {
    const result = await axios.get(`${api.Product}/${proId}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const CreateProductData = createAsyncThunk("CreateProductData", async ({ productName, storeId, isExit, roomId }) => {
    const result = await axios.post(api.CreateProduct, { productName: productName, storeId: storeId, isExit: isExit, roomId: roomId }, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const UpdateProductData = createAsyncThunk("UpdateProductData", async ({ proId, productName, storeId, isExit, roomId }) => {
    const result = await axios.put(`${api.UpdateProduct}/${proId}`, { productName: productName, storeId: storeId, isExit: isExit, roomId: roomId, productId: proId }, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result;
})

export const DeleteProductData = createAsyncThunk("DeleteProductData", async ({ proId }) => {
    const result = await axios.delete(`${api.DeleteProduct}/${proId}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const RoomsData = createAsyncThunk("RoomsData", async () => {
    const result = await axios.get(`${api.Rooms}?PageNumber=1&PageSize=50`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const RoomData = createAsyncThunk("RoomData", async ({ roomId }) => {
    const result = await axios.get(`${api.Room}/${roomId}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const CreateRoomData = createAsyncThunk("CreateRoomData", async ({ roomName, structureId }) => {
    const result = await axios.post(api.CreateRoom, { roomName: roomName, structureId: structureId }, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const UpdateRoomData = createAsyncThunk("UpdateRoomData", async ({ roomId, roomName, structureId, workOrderId }) => {
    const result = await axios.put(`${api.UpdateRoom}/${roomId}`, { roomName: roomName, structureId: structureId, workOrderId: workOrderId, roomId: roomId }, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const DeleteRoomData = createAsyncThunk("DeleteRoomData", async ({ roomId }) => {
    const result = await axios.delete(`${api.DeleteRoom}/${roomId}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const StoresData = createAsyncThunk("StoresData", async () => {
    const result = await axios.get(`${api.Stores}?PageNumber=1&PageSize=50`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const StoreData = createAsyncThunk("StoreData", async ({ sId }) => {
    const result = await axios.get(`${api.Store}/${sId}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const CreateStoreData = createAsyncThunk("CreateStoreData", async ({ storeName, structureId }) => {
    const result = await axios.post(api.CreateStore, { storeName: storeName, structureId: structureId }, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const UpdateStoreData = createAsyncThunk("UpdateStoreData", async ({ sId, storeName, structureId }) => {
    const result = await axios.put(`${api.UpdateStore}/${sId}`, { storeName: storeName, structureId: structureId, storeId: sId }, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const DeleteStoreData = createAsyncThunk("DeleteStoreData", async ({ sId }) => {
    const result = await axios.delete(`${api.DeleteStore}/${sId}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const StructuresData = createAsyncThunk("StructuresData", async () => {
    const result = await axios.get(`${api.Structures}?PageNumber=1&PageSize=50`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const StructureData = createAsyncThunk("StructureData", async ({ sId }) => {
    const result = await axios.get(`${api.Structure}/${sId}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const CreateStructureData = createAsyncThunk("CreateStructureData", async ({ structureName }) => {
    const result = await axios.post(api.CreateStructure, { structureName: structureName }, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const UpdateStructureData = createAsyncThunk("UpdateStructureData", async ({ sId, structureName }) => {
    const result = await axios.put(`${api.UpdateStructure}/${sId}`, { structureName: structureName, structureId: sId }, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const DeleteStructureData = createAsyncThunk("DeleteStructureData", async ({ sId }) => {
    const result = await axios.delete(`${api.DeleteStructure}/${sId}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const WorkOrdersData = createAsyncThunk("WorkOrdersData", async () => {
    const result = await axios.get(`${api.WorkOrders}?PageNumber=1&PageSize=50`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const WorkOrderData = createAsyncThunk("WorkOrderData", async ({ wId }) => {
    const result = await axios.get(`${api.WorkOrder}/${wId}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const CreateWorkOrderData = createAsyncThunk("CreateWorkOrderData", async ({ workOrderName, isCompleted, productId, structureId, roomId, storeId }) => {
    const result = await axios.post(api.CreateWorkOrder, { workOrderName: workOrderName, isCompleted: isCompleted, productId: productId, structureId: structureId, roomId: roomId, storeId: storeId }, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const UpdateWorkOrderData = createAsyncThunk("UpdateWorkOrderData", async ({ wId, workOrderName, isCompleted, productId, structureId, roomId, storeId }) => {
    const result = await axios.put(`${api.UpdateWorkOrder}/${wId}`, { workOrderName: workOrderName, isCompleted: isCompleted, productId: productId, structureId: structureId, roomId: roomId, storeId: storeId, workOrderId: wId }, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const DeleteWorkOrderData = createAsyncThunk("DeleteWorkOrderData", async ({ wId }) => {
    const result = await axios.delete(`${api.DeleteWorkOrder}/${wId}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const UsersData = createAsyncThunk("UsersData", async () => {
    const result = await axios.get(`${api.Users}?PageNumber=1&PageSize=50`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const UserData = createAsyncThunk("UserData", async ({ uId }) => {
    const result = await axios.get(`${api.User}/${uId === 0 ? id : uId}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const UpdateUserData = createAsyncThunk("UpdateUserData", async ({ uId, firstName, lastName, userName, email, phoneNumber }) => {
    const result = await axios.put(`${api.UpdateUser}/${uId === 0 ? id : uId}`, { firstName: firstName, lastName: lastName, userName: userName, email: email, phoneNumber: phoneNumber, userId: uId }, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const DeleteUserData = createAsyncThunk("DeleteUserData", async ({ uId }) => {
    const result = await axios.delete(`${api.DeleteUser}/${uId}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const ChangePassData = createAsyncThunk("ChangePassData", async ({ uId, currentPassword, newPassword }) => {
    const result = await axios.put(`${api.ChangePassword}/${uId === 0 ? id : uId}`, { currentPassword: currentPassword, newPassword: newPassword }, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
    return result
})

export const ExitApp = () => {
    localStorage.clear()
    window.location.href = "/login"
}