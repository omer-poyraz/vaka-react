import { Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { DeleteStoreData, StoreStructureData } from '../../service'
import { CiTrash } from 'react-icons/ci'

const Stores = () => {
    const selector = useSelector((state) => state)
    const dispatch = useDispatch()

    const getData = () => {
        dispatch(StoreStructureData({ sId: selector.route.structureId }))
    }

    const deleteData = (id) => {
        dispatch(DeleteStoreData({ sId: id }))
        getData()
    }

    const columns = [
        {
            "title": "Id",
            "dataIndex": "storeId"
        },
        {
            "title": "Store",
            "dataIndex": "storeName"
        },
        {
            "title": "Process",
            "render": (work) => {
                return (
                    <>
                        <CiTrash size={24} color="red" className="ml-3" onClick={() => deleteData(work.storeId)} />
                    </>
                )
            }
        }
    ]

    useEffect(() => getData(), [])

    return (
        <Card className='mt-3'>
            <CardHeader tag='h3'>Structure to Stores</CardHeader>
            <CardBody>
                <Table
                    bordered
                    columns={columns}
                    dataSource={selector.storeStructure.storeStructure}
                />
            </CardBody>
        </Card>
    )
}

export default Stores