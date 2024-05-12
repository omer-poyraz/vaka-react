import React, { useEffect, useState } from 'react'
import { CiEdit, CiGrid41, CiTrash } from 'react-icons/ci'
import { Select, Table } from 'antd'
import { Button, Card, CardBody, CardHeader, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { CreateRoomData, DeleteRoomData, RoomsData, StructuresData, UpdateRoomData } from '../../service'
import { useForm } from 'react-hook-form'
import { changePage, selectRoom } from '../../redux/slices/routeSlice'

const RoomPage = () => {
    const selector = useSelector((state) => state)
    const dispatch = useDispatch()
    const [isCreate, setIsCreate] = useState(true)
    const [selectStruct, setSelectStruct] = useState()
    const [selectData, setSelectData] = useState([])
    const [structures, setStructures] = useState({ value: 0, label: "" })
    const [modal, setModal] = useState(false)
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
        dispatch(RoomsData())
        dispatch(StructuresData())
        structureFill()
    }

    const createSubmit = (values, e) => {
        dispatch(CreateRoomData({
            roomName: e.target[0].value,
            structureId: selectStruct
        }))
    }

    const updateSubmit = (values, e) => {
        dispatch(UpdateRoomData({
            roomId: selectData.roomId,
            roomName: e.target[0].value,
            structureId: null
        }))
    }

    const deleteData = (id) => {
        dispatch(DeleteRoomData({ roomId: id }))
    }

    const columns = [
        {
            "title": "Id",
            "dataIndex": "roomId"
        },
        {
            "title": "Room Name",
            "dataIndex": "roomName"
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
                        <CiEdit size={24} color="green" onClick={() => { setSelectData(work); setIsCreate(false); setModal(true) }} />
                        <CiGrid41 size={24} color='teal' className='ml-3' onClick={() => { dispatch(selectRoom({ id: work.roomId })); dispatch(changePage({ id: 9 })) }} />
                        <CiTrash size={24} color="red" className="ml-3" onClick={() => deleteData(work.roomId)} />
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
                        <div><h3>Rooms</h3></div>
                        <div><Button color='success' onClick={() => { structureFill(); setIsCreate(true); setSelectData([]); setModal(true) }}>Add Room</Button></div>
                    </div>
                </CardHeader>
                <CardBody>
                    <Table
                        bordered
                        dataSource={selector.rooms.rooms}
                        columns={columns}
                    />
                </CardBody>
            </Card>
            <Modal isOpen={modal} toggle={() => setModal(!modal)} className='modal-dialog-centered'>
                <ModalHeader toggle={() => setModal(!modal)} tag='h3'>{isCreate ? "Create Room" : "Update Room"}</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit(isCreate ? createSubmit : updateSubmit)}>
                        <FormGroup>
                            <Label>Room Name</Label>
                            <Input type='text' defaultValue={selectData.roomName} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Structure</Label>
                            <div className='w-100'>
                                <Select className='w-100' options={structures} onChange={(e) => setSelectStruct(e)} />
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

export default RoomPage