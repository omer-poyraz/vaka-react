import React, { useEffect, useState } from 'react'
import { CiEdit, CiGrid41, CiTrash } from 'react-icons/ci'
import { Select, Table } from 'antd'
import { Button, Card, CardBody, CardHeader, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { CreateStoreData, DeleteStoreData, StoresData, StructuresData, UpdateStoreData } from '../../service'
import { useForm } from 'react-hook-form'

const StorePage = () => {
    const selector = useSelector((state) => state)
    const dispatch = useDispatch()
    const [isCreate, setIsCreate] = useState(true)
    const [modal, setModal] = useState(false)
    const [selectedStore, setSelectedStore] = useState([])
    const [structures, setStructures] = useState({ value: 0, label: "" })
    const [selectStruct, setSelectStruct] = useState()
    const { handleSubmit } = useForm()

    const structureFill = () => {
        var structures = selector.structures.structures
        let newList = []
        if (structures !== null && structures !== undefined) {
            for (let i = 0; i < structures.length; i++) {
                newList.push({ value: structures[i].structureId, label: structures[i].structureName })
            }
            setStructures(newList)
        }
    }

    const getData = () => {
        dispatch(StoresData())
        dispatch(StructuresData())
        structureFill()
    }

    const deleteStore = (id) => {
        dispatch(DeleteStoreData({ sId: id }))
        getData()
    }

    const createSubmit = (values, e) => {
        dispatch(CreateStoreData({
            storeName: e.target[0].value,
            structureId: selectStruct
        }))
    }

    const updateSubmit = (values, e) => {
        dispatch(UpdateStoreData({
            sId: selectedStore.storeId,
            storeName: e.target[0].value,
            structureId: null
        }))
    }

    const columns = [
        {
            "title": "Id",
            "dataIndex": "storeId"
        },
        {
            "title": "Store Name",
            "dataIndex": "storeName"
        },
        {
            "title": "Structure",
            "render": (work) => `${work.structure.structureName}`
        },
        {
            "title": "Process",
            "render": (work) => {
                return (
                    <>
                        <CiEdit size={24} color="green" onClick={() => { setIsCreate(false); setSelectedStore(work); setModal(true) }} />
                        <CiGrid41 size={24} color='teal' className='ml-3' />
                        <CiTrash size={24} color="red" className="ml-3" onClick={() => deleteStore(work.storeId)} />
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
                        <div><h3>Stores</h3></div>
                        <div><Button color='success' onClick={() => { structureFill(); setIsCreate(true); setModal(true); setSelectedStore([]) }}>Add Store</Button></div>
                    </div>
                </CardHeader>
                <CardBody>
                    <Table
                        bordered
                        dataSource={selector.stores.stores}
                        columns={columns}
                    />
                </CardBody>
            </Card>
            <Modal isOpen={modal} toggle={() => setModal(!modal)} className='modal-dialog-centered'>
                <ModalHeader toggle={() => setModal(!modal)} tag='h3'>{isCreate ? "Create Store" : "Edit Store"}</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit(isCreate ? createSubmit : updateSubmit)}>
                        <FormGroup>
                            <Label>Store Name</Label>
                            <Input type='text' defaultValue={selectedStore.storeName} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Structure</Label>
                            <Select className='w-100' options={structures} onChange={(e) => setSelectStruct(e)} />
                        </FormGroup>
                        <Button color={isCreate ? 'success' : 'warning'}>{isCreate ? "Create" : "Edit"}</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default StorePage