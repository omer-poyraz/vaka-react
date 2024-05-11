import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, CardBody, CardHeader, Form, FormGroup, Input, Label } from 'reactstrap'
import { ChangePassData, UpdateUserData, UserData } from '../../service'
import { useForm } from 'react-hook-form'

const UserPage = () => {
    const selector = useSelector((state) => state)
    const dispatch = useDispatch()
    const { handleSubmit } = useForm()

    const getData = () => {
        dispatch(UserData({ uId: 0 }))
    }

    const editSubmit = (values, e) => {
        dispatch(UpdateUserData({
            uId: 0,
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            userName: e.target[2].value,
            email: e.target[4].value,
            phoneNumber: e.target[3].value
        }))
    }

    const changePassSubmit = (values, e) => {
        dispatch(ChangePassData({
            uId: 0,
            currentPassword: e.target[0].value,
            newPassword: e.target[1].value
        }))
    }

    useEffect(() => getData(), [])

    return (
        <div className='p-3'>
            <Card>
                <CardHeader tag='h3'>Edit Profile</CardHeader>
                <CardBody>
                    <Form onSubmit={handleSubmit(editSubmit)} className='row'>
                        <FormGroup className='col-md-6'>
                            <Label>First Name</Label>
                            <Input type='text' defaultValue={selector.user.user === null ? "" : selector.user.user.firstName} />
                        </FormGroup>
                        <FormGroup className='col-md-6'>
                            <Label>Last Name</Label>
                            <Input type='text' defaultValue={selector.user.user === null ? "" : selector.user.user.lastName} />
                        </FormGroup>
                        <FormGroup className='col-md-6'>
                            <Label>User Name</Label>
                            <Input type='text' defaultValue={selector.user.user === null ? "" : selector.user.user.userName} />
                        </FormGroup>
                        <FormGroup className='col-md-6'>
                            <Label>Phone Number</Label>
                            <Input type='text' defaultValue={selector.user.user === null ? "" : selector.user.user.phoneNumber} />
                        </FormGroup>
                        <FormGroup className='col-md-12'>
                            <Label>Email</Label>
                            <Input type='text' defaultValue={selector.user.user === null ? "" : selector.user.user.email} />
                        </FormGroup>
                        <div className='w-100 pr-3 d-flex justify-content-end'>
                            <Button color='warning'>Edit</Button>
                        </div>
                    </Form>
                </CardBody>
            </Card>

            <Card className='mt-3'>
                <CardHeader tag='h3'>Change Password</CardHeader>
                <CardBody>
                    <Form className='row' onSubmit={handleSubmit(changePassSubmit)}>
                        <FormGroup className='col-md-6'>
                            <Label>Current Password</Label>
                            <Input type='text' />
                        </FormGroup>
                        <FormGroup className='col-md-6'>
                            <Label>New Password</Label>
                            <Input type='text' />
                        </FormGroup>
                        <div className='w-100 pr-3 d-flex justify-content-end'>
                            <Button color='warning'>Edit</Button>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default UserPage