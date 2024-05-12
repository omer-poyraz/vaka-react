import { Select, Switch, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { CiTrash } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, CardBody, CardHeader, Form, FormGroup, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { CreateSaveStoreData, ProductsData, RoomsData, StoresData, StructuresData } from '../../service'
import { useForm } from 'react-hook-form'

const SaveStore = () => {
    const selector = useSelector((state) => state)
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const [stores, setStores] = useState({ value: 0, label: "" })
    const [products, setProducts] = useState({ value: 0, label: "" })
    const [rooms, setRooms] = useState({ value: 0, label: "" })
    const [structures, setStructures] = useState({ value: 0, label: "" })
    const [selectStore, setSelectStore] = useState(0)
    const [selectProduct, setSelectProduct] = useState(0)
    const [selectRoom, setSelectRoom] = useState(0)
    const [selectStructure, setSelectStructure] = useState(0)
    const { handleSubmit } = useForm()

    const Fill = () => {
        var store = selector.stores.stores
        var product = selector.products.products
        var room = selector.rooms.rooms
        var structure = selector.structures.structures
        let newList1 = []
        let newList2 = []
        let newList3 = []
        let newList4 = []
        if (store !== null && store !== undefined) {
            for (let i = 0; i < store.length; i++) {
                newList1.push({ value: store[i].storeId, label: store[i].storeName })
            }
            setStores(newList1)
        }
        if (product !== null && product !== undefined) {
            for (let i = 0; i < product.length; i++) {
                newList2.push({ value: product[i].productId, label: product[i].productName })
            }
            setProducts(newList2)
        }
        if (room !== null && room !== undefined) {
            for (let i = 0; i < room.length; i++) {
                newList3.push({ value: room[i].roomId, label: room[i].roomName })
            }
            setRooms(newList3)
        }
        if (structure !== null && structure !== undefined) {
            for (let i = 0; i < structure.length; i++) {
                newList4.push({ value: structure[i].structureId, label: structure[i].structureName })
            }
            setStructures(newList4)
        }
    }

    const getData = () => {
        dispatch(StoresData())
        dispatch(ProductsData())
        dispatch(RoomsData())
        dispatch(StructuresData())
        Fill()
    }

    const createSubmit = (values, e) => {
        dispatch(CreateSaveStoreData({
            storeId: selectStore,
            productId: selectProduct,
            isEntrance: e.target[4].ariaChecked === "true" ? true : false,
            roomId: selectRoom,
            structureId: selectStructure
        }))
        getData()
    }

    const columns = [
        {
            "title": "Id",
            "dataIndex": ""
        },
        {
            "title": "Process",
            "render": (work) => {
                return (
                    <>
                        <CiTrash size={24} color="red" className="ml-3" />
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
                    <div className='d-flex justify-content-between align-items-center'>
                        <div><h3>Save Store</h3></div>
                        <div><Button color='success' onClick={() => { Fill(); setModal(true) }}>Create Save Store</Button></div>
                    </div>
                </CardHeader>
                <CardBody>
                    <Table
                        bordered
                        columns={columns}
                    />
                </CardBody>
            </Card>

            <Modal isOpen={modal} toggle={() => setModal(!modal)} className='modal-dialog-centered'>
                <ModalHeader tag='h3' toggle={() => setModal(!modal)}>Create Save Storage</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit(createSubmit)}>
                        <FormGroup>
                            <Label>Store</Label>
                            <Select className='w-100' options={stores} onChange={(e) => setSelectStore(e)} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Product</Label>
                            <Select className='w-100' options={products} onChange={(e) => setSelectProduct(e)} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Room</Label>
                            <Select className='w-100' options={rooms} onChange={(e) => setSelectRoom(e)} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Structure</Label>
                            <Select className='w-100' options={structures} onChange={(e) => setSelectStructure(e)} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Is Entrance</Label>
                            <div className='w-100'><Switch /></div>
                        </FormGroup>
                        <div className='pr-3 d-flex justify-content-end'>
                            <Button color='success'>Create</Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default SaveStore