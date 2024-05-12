import { Switch, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, CardBody, CardHeader, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { CreateStructureWorkOrderData, CreateWorkOrderData, DeleteWorkOrderData, StructureWorkOrdersData, UpdateWorkOrderData } from '../../service'
import { CiCircleCheck, CiCircleInfo, CiEdit, CiTrash } from 'react-icons/ci'
import { useForm } from 'react-hook-form'
import Rooms from './rooms'
import Stores from './stores'

const StructureEdit = () => {
    const selector = useSelector((state) => state)
    const dispatch = useDispatch()
    const [isCreate, setIsCreate] = useState(true)
    const [selectData, setSelectData] = useState([])
    const [modal, setModal] = useState(false)
    const { handleSubmit } = useForm()

    const getData = () => {
        console.log(selector.route.structureId)
        dispatch(StructureWorkOrdersData({ sId: selector.route.structureId }))
    }

    const deleteData = (id) => {
        dispatch(DeleteWorkOrderData({ wId: id }))
        getData()
    }

    const createSubmit = (values, e) => {
        dispatch(CreateStructureWorkOrderData({
            workOrderName: e.target[0].value,
            isCompleted: e.target[1].ariaChecked === "true" ? true : false,
            sId: selector.route.structureId,
        }))
        getData()
    }

    const updateSubmit = (values, e) => {
        dispatch(UpdateWorkOrderData({
            wId: selectData.workOrderId,
            workOrderName: e.target[0].value,
            isCompleted: e.target[1].ariaChecked === "true" ? true : false,
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
            "render": (work) => work.isCompleted ? <CiCircleCheck size={30} color='green' /> : <CiCircleInfo size={30} color='red' />
        },
        {
            "title": "Process",
            "render": (work) => {
                return (
                    <>
                        <CiEdit size={24} color="green" onClick={() => { setSelectData(work); setIsCreate(false); setModal(true) }} />
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
                    <div className='d-flex justify-content-between align-items-center'>
                        <div><h3>Structure Work Order</h3></div>
                        <div><Button color='success' onClick={() => { setIsCreate(true); setSelectData([]); setModal(true) }}>Add Work Order</Button></div>
                    </div>
                </CardHeader>
                <CardBody>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={selector.structureWorkOrders.structureWorkOrders}
                    />
                </CardBody>
            </Card>

            <Rooms />

            <Stores />

            <Modal isOpen={modal} toggle={() => setModal(!modal)} className='modal-dialog-centered'>
                <ModalHeader toggle={() => setModal(!modal)} tag='h3'>{isCreate ? "Add Structure Work Order" : "Edit Structure Work Order"}</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit(isCreate ? createSubmit : updateSubmit)}>
                        <FormGroup>
                            <Label>Work Order</Label>
                            <Input type='text' defaultValue={selectData.workOrderName} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Status</Label>
                            <div>
                                <Switch defaultChecked={selectData.isCompleted} />
                            </div>
                        </FormGroup>
                        <div className='pr-3 d-flex justify-content-end'>
                            <Button color={isCreate ? 'success' : 'warning'}>{isCreate ? "Create" : "Update"}</Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default StructureEdit