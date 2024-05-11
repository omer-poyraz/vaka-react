import React, { useEffect, useState } from 'react'
import { CiCircleCheck, CiCircleInfo, CiEdit, CiGrid41, CiTrash } from 'react-icons/ci'
import { Select, Table } from 'antd'
import { Button, Card, CardBody, CardHeader, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { CreateProductData, DeleteProductData, ProductsData, RoomsData, StoresData, UpdateProductData } from '../../service'
import { useForm } from 'react-hook-form'

const ProductPage = () => {
    const selector = useSelector((state) => state)
    const dispatch = useDispatch()
    const [isCreate, setIsCreate] = useState(true)
    const [selectData, setSelectData] = useState([])
    const [selectStore, setSelectStore] = useState()
    const [selectRoom, setSelectRoom] = useState()
    const [stores, setStores] = useState({ value: 0, label: "" })
    const [rooms, setRooms] = useState({ value: 0, label: "" })
    const [modal, setModal] = useState(false)
    const { handleSubmit } = useForm()

    const Fill = () => {
        var stores = selector.stores.stores
        var rooms = selector.rooms.rooms
        let newList = []
        let newList2 = []
        if (stores !== null && stores !== undefined) {
            for (let i = 0; i < stores.length; i++) {
                newList.push({ value: stores[i].storeId, label: stores[i].storeName })
            }
            setStores(newList)
        }
        if (rooms !== null && rooms !== undefined) {
            for (let i = 0; i < rooms.length; i++) {
                newList2.push({ value: rooms[i].roomId, label: rooms[i].roomName })
            }
            setRooms(newList2)
        }
    }

    const getData = () => {
        dispatch(ProductsData())
        dispatch(StoresData())
        dispatch(RoomsData())
        Fill()
    }

    const deleteData = (id) => {
        dispatch(DeleteProductData({ proId: id }))
        getData()
    }

    const columns = [
        {
            "title": "Id",
            "dataIndex": "productId"
        },
        {
            "title": "Product Name",
            "dataIndex": "productName"
        },
        {
            "title": "Store",
            "render": (work) => `${work.store.storeName}`
        },
        {
            "title": "Room",
            "render": (work) => `${work.room.roomName}`
        },
        {
            "title": "Process",
            "render": (work) => {
                return (
                    <>
                        <CiEdit size={24} color="green" onClick={() => { setSelectData(work); setIsCreate(false); setModal(true) }} />
                        <CiGrid41 size={24} color='teal' className='ml-3' />
                        <CiTrash size={24} color="red" className="ml-3" onClick={() => deleteData(work.productId)} />
                    </>
                )
            }
        }
    ]

    const createSubmit = (values, e) => {
        dispatch(CreateProductData({
            productName: e.target[0].value,
            storeId: selectStore,
            isExit: selectStore === undefined ? true : false,
            roomId: selectRoom
        }))
    }

    const updateSubmit = (values, e) => {
        dispatch(UpdateProductData({
            proId: selectData.productId,
            productName: e.target[0].value,
            storeId: selectStore,
            isExit: selectStore === undefined ? true : false,
            roomId: selectRoom
        }))
    }

    useEffect(() => getData(), [])

    return (
        <div className='p-3'>
            <Card>
                <CardHeader>
                    <div className='d-flex justify-content-between'>
                        <div><h3>Products</h3></div>
                        <div><Button color='success' onClick={() => { Fill(); setIsCreate(true); setSelectData([]); setModal(true) }}>Add Product</Button></div>
                    </div>
                </CardHeader>
                <CardBody>
                    <Table
                        bordered
                        dataSource={selector.products.products}
                        columns={columns}
                    />
                </CardBody>
            </Card>

            <Modal isOpen={modal} toggle={() => setModal(!modal)} className='modal-dialog-centered'>
                <ModalHeader toggle={() => setModal(!modal)} tag='h3'>{isCreate ? "Create Product" : "Update Product"}</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit(isCreate ? createSubmit : updateSubmit)}>
                        <FormGroup>
                            <Label>Product Name</Label>
                            <Input type='text' defaultValue={selectData.productName} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Store</Label>
                            <div className='w-100'>
                                <Select className='w-100' options={stores} onChange={(e) => setSelectStore(e)} />
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label>Room</Label>
                            <div className='w-100'>
                                <Select className='w-100' options={rooms} onChange={(e) => setSelectRoom(e)} />
                            </div>
                        </FormGroup>
                        <div className='pr-3 d-flex justify-content-end'>
                            <Button color='warning'>{isCreate ? "Create" : "Update"}</Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ProductPage