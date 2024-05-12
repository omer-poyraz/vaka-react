import React, { useEffect, useState } from 'react'
import { CiEdit, CiGrid41, CiTrash } from 'react-icons/ci'
import { Table } from 'antd'
import { Button, Card, CardBody, CardHeader, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { CreateStructureData, DeleteStructureData, StructuresData, UpdateStructureData } from '../../service'
import { useForm } from 'react-hook-form'
import { changePage, selectStructure } from '../../redux/slices/routeSlice'

const StructurePage = () => {
    const selector = useSelector((state) => state)
    const dispatch = useDispatch()
    const [isCreate, setIsCreate] = useState(true)
    const [modal, setModal] = useState(false)
    const [selectedWork, setSelectedWork] = useState([])
    const { handleSubmit } = useForm()

    const getData = () => {
        dispatch(StructuresData())
    }

    const deleteData = (id) => {
        dispatch(DeleteStructureData({ sId: id }))
        getData()
    }

    const createSubmit = (values, e) => {
        dispatch(CreateStructureData({
            structureName: e.target[0].value
        }))
        getData()
        setModal(false)
    }

    const updateSubmit = (values, e) => {
        dispatch(UpdateStructureData({
            sId: selectedWork.structureId,
            structureName: e.target[0].value
        }))
        getData()
        setModal(false)
    }

    const columns = [
        {
            "title": "Id",
            "dataIndex": "structureId"
        },
        {
            "title": "Work Order",
            "dataIndex": "structureName"
        },
        {
            "title": "Process",
            "render": (work) => {
                return (
                    <>
                        <CiEdit size={24} color="green" onClick={() => { setIsCreate(false); setSelectedWork(work); setModal(true) }} />
                        <CiGrid41 size={24} color='teal' className='ml-3' onClick={() => { dispatch(selectStructure({ id: work.structureId })); dispatch(changePage({ id: 11 })) }} />
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
                        <div><h3>Structures</h3></div>
                        <div><Button color='success' onClick={() => { setIsCreate(true); setModal(true); setSelectedWork([]) }}>Add Store</Button></div>
                    </div>
                </CardHeader>
                <CardBody>
                    <Table
                        bordered
                        dataSource={selector.structures.structures}
                        columns={columns}
                    />
                </CardBody>
            </Card>
            <Modal isOpen={modal} toggle={() => setModal(!modal)} className='modal-dialog-centered'>
                <ModalHeader toggle={() => setModal(!modal)} tag='h3'>{isCreate ? "Create Structure" : "Edit Structure"}</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit(isCreate ? createSubmit : updateSubmit)}>
                        <FormGroup>
                            <Label>Structure Name</Label>
                            <Input type='text' defaultValue={selectedWork.structureName} />
                        </FormGroup>
                        <Button color={isCreate ? 'success' : 'warning'}>{isCreate ? "Create" : "Edit"}</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default StructurePage