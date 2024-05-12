import React, { useEffect, useState } from 'react'
import { CiEdit, CiGrid41, CiTrash } from 'react-icons/ci'
import { Select, Table } from 'antd'
import { Button, Card, CardBody, CardHeader, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { CreateProductData, DeleteProductData, ProductsData, UpdateProductData } from '../../service'
import { useForm } from 'react-hook-form'
import { changePage, selectProduct } from '../../redux/slices/routeSlice'

const ProductPage = () => {
    const selector = useSelector((state) => state)
    const dispatch = useDispatch()
    const [isCreate, setIsCreate] = useState(true)
    const [selectData, setSelectData] = useState([])
    const [modal, setModal] = useState(false)
    const { handleSubmit } = useForm()

    const getData = () => {
        dispatch(ProductsData())
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
            "title": "Process",
            "render": (work) => {
                return (
                    <>
                        <CiEdit size={24} color="green" onClick={() => { setSelectData(work); setIsCreate(false); setModal(true) }} />
                        <CiGrid41 size={24} color='teal' className='ml-3' onClick={() => { dispatch(selectProduct({ id: work.productId })); dispatch(changePage({ id: 8 })) }} />
                        <CiTrash size={24} color="red" className="ml-3" onClick={() => deleteData(work.productId)} />
                    </>
                )
            }
        }
    ]

    const createSubmit = (values, e) => {
        dispatch(CreateProductData({
            productName: e.target[0].value
        }))
    }

    const updateSubmit = (values, e) => {
        dispatch(UpdateProductData({
            proId: selectData.productId,
            productName: e.target[0].value,
        }))
    }

    useEffect(() => getData(), [])

    return (
        <div className='p-3'>
            <Card>
                <CardHeader>
                    <div className='d-flex justify-content-between'>
                        <div><h3>Products</h3></div>
                        <div><Button color='success' onClick={() => { setIsCreate(true); setSelectData([]); setModal(true) }}>Add Product</Button></div>
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