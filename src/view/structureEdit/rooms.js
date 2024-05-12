import { Table } from 'antd'
import React, { useEffect } from 'react'
import { CiTrash } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { DeleteRoomData, RoomStructureData } from '../../service'

const Rooms = () => {
    const selector = useSelector((state) => state)
    const dispatch = useDispatch()

    const getData = () => {
        dispatch(RoomStructureData({ sId: selector.route.structureId }))
    }

    const deleteData = (id) => {
        dispatch(DeleteRoomData({ roomId: id }))
        getData()
    }

    const columns = [
        {
            "title": "Id",
            "dataIndex": "roomId"
        },
        {
            "title": "Room",
            "dataIndex": "roomName"
        },
        {
            "title": "Process",
            "render": (work) => {
                return (
                    <>
                        <CiTrash size={24} color="red" className="ml-3" onClick={() => deleteData(work.roomId)} />
                    </>
                )
            }
        }
    ]

    useEffect(() => getData(), [])

    return (
        <Card className='mt-3'>
            <CardHeader tag='h3'>Structure to Room</CardHeader>
            <CardBody>
                <Table
                    bordered
                    columns={columns}
                    dataSource={selector.roomStructure.roomStructure}
                />
            </CardBody>
        </Card>
    )
}

export default Rooms