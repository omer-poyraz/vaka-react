import React, { useEffect, useState } from 'react'
import { CiCircleCheck, CiCircleInfo, CiEdit, CiTrash } from 'react-icons/ci'
import { Select, Switch, Table } from 'antd'
import { Button, Card, CardBody, CardHeader, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { CreateWorkOrderData, DeleteWorkOrderData, ProductsData, RoomsData, StoresData, StructuresData, UpdateWorkOrderData, WorkOrdersData } from '../../service'
import { useForm } from 'react-hook-form'

const WorkOrderPage = () => {
    const selector = useSelector((state) => state)
    const dispatch = useDispatch()
    const [isCreate, setIsCreate] = useState(true)
    const [modal, setModal] = useState(false)
    const [selectedWork, setSelectedWork] = useState([])
    const [stores, setStores] = useState({ value: 0, label: "" })
    const [rooms, setRooms] = useState({ value: 0, label: "" })
    const [structures, setStructures] = useState({ value: 0, label: "" })
    const [products, setProducts] = useState({ value: 0, label: "" })
    const [selectStore, setSelectStore] = useState()
    const [selectRoom, setSelectRoom] = useState()
    const [selectStructure, setSelectStructure] = useState()
    const [selectProduct, setSelectProduct] = useState()
    const { handleSubmit } = useForm()

    const Fill = () => {
        var stores = selector.stores.stores
        var rooms = selector.rooms.rooms
        var structures = selector.structures.structures
        var products = selector.products.products
        let newList = []
        let newList2 = []
        let newList3 = []
        let newList4 = []
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
        if (structures !== null && structures !== undefined) {
            for (let i = 0; i < structures.length; i++) {
                newList3.push({ value: structures[i].structureId, label: structures[i].structureName })
            }
            setStructures(newList3)
        }
        if (products !== null && products !== undefined) {
            for (let i = 0; i < products.length; i++) {
                newList4.push({ value: products[i].productId, label: products[i].productName })
            }
            setProducts(newList4)
        }
    }

    const getData = () => {
        dispatch(WorkOrdersData())
        dispatch(StoresData())
        dispatch(RoomsData())
        dispatch(StructuresData())
        dispatch(ProductsData())
        Fill()
    }

    const deleteData = (id) => {
        dispatch(DeleteWorkOrderData({ wId: id }))
        getData()
    }

    const createSubmit = (values, e) => {
        dispatch(CreateWorkOrderData({
            workOrderName: e.target[0].value,
            isCompleted: e.target[5].ariaChecked === "true" ? true : false,
            productId: selectProduct === undefined ? 0 : selectProduct,
            structureId: selectStructure === undefined ? 0 : selectStructure,
            roomId: selectRoom === undefined ? 0 : selectRoom,
            storeId: selectStore === undefined ? 0 : selectStore
        }))
        getData()
    }

    const updateSubmit = (values, e) => {
        dispatch(UpdateWorkOrderData({
            wId: selectedWork.workOrderId,
            workOrderName: e.target[0].value,
            isCompleted: e.target[1].ariaChecked === "true" ? true : false,
            productId: "",
            structureId: "",
            roomId: "",
            storeId: ""
        }))
        getData()
    }

    const columns = [
        {
            "title": "Id",
            "dataIndex": "workOrderId"
        },
        {
            "title": "Work Order",
            "dataIndex": "workOrderName"
        },
        {
            "title": "Status",
            "render": (work) => work.isCompleted ? <CiCircleCheck color='green' size={30} /> : <CiCircleInfo color='red' size={30} />
        },
        {
            "title": "Structure",
            "render": (work) => `${work.structure.structureName}`
        },
        {
            "title": "Room",
            "render": (work) => `${work.room.roomName}`
        },
        {
            "title": "Store",
            "render": (work) => `${work.store.storeName}`
        },
        {
            "title": "Product",
            "render": (work) => `${work.product.productName}`
        },
        {
            "title": "Process",
            "render": (work) => {
                return (
                    <>
                        <CiEdit size={24} color="green" onClick={() => { setIsCreate(false); setSelectedWork(work); setModal(true) }} />
                        <CiTrash size={24} color="red" className="ml-3" onClick={() => deleteData(work.workOrderId)} />
                    </>
                )
            }
        }
    ]

    useEffect(() => getData(), [])

    return (
        <div className='p-3'>
            <Card>
                <CardHeader>
                    <div className='d-flex justify-content-between'>
                        <div><h3>Work Orders</h3></div>
                        <div><Button color='success' onClick={() => { Fill(); setIsCreate(true); setModal(true); setSelectedWork([]) }}>Add Store</Button></div>
                    </div>
                </CardHeader>
                <CardBody>
                    <Table
                        bordered
                        dataSource={selector.workOrders.works}
                        columns={columns}
                    />
                </CardBody>
            </Card>
            <Modal isOpen={modal} toggle={() => setModal(!modal)} className='modal-dialog-centered'>
                <ModalHeader toggle={() => setModal(!modal)} tag='h3'>{isCreate ? "Create Work Order" : "Edit Work Order"}</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit(isCreate ? createSubmit : updateSubmit)}>
                        <FormGroup>
                            <Label>Work Order</Label>
                            <Input type='text' defaultValue={selectedWork.workOrderName} />
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
                        <FormGroup>
                            <Label>Structure</Label>
                            <div className='w-100'>
                                <Select className='w-100' options={structures} onChange={(e) => setSelectStructure(e)} />
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label>Product</Label>
                            <div className='w-100'>
                                <Select className='w-100' options={products} onChange={(e) => setSelectProduct(e)} />
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label>Status</Label>
                            <div>
                                <Switch defaultChecked={selectedWork.isCompleted} />
                            </div>
                        </FormGroup>
                        <Button color={isCreate ? 'success' : 'warning'}>{isCreate ? "Create" : "Edit"}</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default WorkOrderPage