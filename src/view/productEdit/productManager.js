import { Select, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { CiTrash } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { CreateProductRoomData, CreateProductStoreData, DeleteProductRoomData, DeleteProductStoreData, ProductRoomsData, ProductsData, ProductStoresData } from '../../service'

const ProductManager = () => {
    const selector = useSelector((state) => state)
    const dispatch = useDispatch()
    const [products, setProducts] = useState({ value: 0, label: "" })
    const [selectPro1, setSelectPro1] = useState(0)
    const [selectPro2, setSelectPro2] = useState(0)

    const Fill = () => {
        var products = selector.products.products
        let newList = []
        if (products !== undefined && products !== null) {
            for (let i = 0; i < products.length; i++) {
                newList.push({ value: products[i].productId, label: products[i].productName })
            }
            setProducts(newList)
        }
    }

    const getData = () => {
        dispatch(ProductsData())
        dispatch(ProductRoomsData())
        dispatch(ProductStoresData())
        Fill()
    }

    const deleteData = (isStore, id) => {
        if (isStore) {
            dispatch(DeleteProductStoreData({ pId: id }))
            getData()
        } else {
            dispatch(DeleteProductRoomData({ pId: id }))
            getData()
        }
        getData()
    }

    const craeteProduct = (isStore) => {
        if (isStore) {
            dispatch(CreateProductStoreData({ pId: selectPro2 }))
            getData()
        } else {
            dispatch(CreateProductRoomData({ pId: selectPro1 }))
            getData()
        }
    }

    const columns1 = [
        {
            "title": "Id",
            "dataIndex": "productRoomId"
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
                        <CiTrash size={24} color="red" className="ml-3" onClick={() => deleteData(false, work.productRoomId)} />
                    </>
                )
            }
        }
    ]

    const columns2 = [
        {
            "title": "Id",
            "dataIndex": "productStoreId"
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
                        <CiTrash size={24} color="red" className="ml-3" onClick={() => deleteData(true, work.productStoreId)} />
                    </>
                )
            }
        }
    ]

    useEffect(() => { getData(); Fill() }, [])

    return (
        <div className='p-3'>
            <Card className='mt-3'>
                <CardHeader tag='h3'>Where is product</CardHeader>
                <CardBody>
                    <Row>
                        <Col md={6} className='border p-2 rounded'>
                            <h5>Rooms</h5>
                            <div className='w-100 d-flex justify-content-between'>
                                <Select className='w-50' options={products} onChange={(e) => { setSelectPro1(0); setSelectPro1(e) }} />
                                <Button color='success' disabled={selectPro1 === 0} onClick={() => craeteProduct(false)}>Add Product</Button>
                            </div>
                            <div className='mt-2'>
                                <Table
                                    bordered
                                    columns={columns1}
                                    dataSource={selector.productRooms.productRooms}
                                />
                            </div>
                        </Col>
                        <Col md={6} className='border p-2 rounded'>
                            <h5>Stores</h5>
                            <div className='w-100 d-flex justify-content-between'>
                                <Select className='w-50' options={products} onChange={(e) => { setSelectPro2(0); setSelectPro2(e) }} />
                                <Button color='success' disabled={selectPro2 === 0} onClick={() => craeteProduct(true)}>Add Product</Button>
                            </div>
                            <div className='mt-2'>
                                <Table
                                    bordered
                                    columns={columns2}
                                    dataSource={selector.productStores.productStores}
                                />
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    )
}

export default ProductManager