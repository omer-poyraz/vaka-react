import React, { useState } from 'react'
import { Button, Container, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { CiBoxes, CiForkAndKnife, CiGrid2H, CiGrid2V, CiGrid41, CiHome, CiLogout, CiMenuBurger, CiSaveDown1, CiUser } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../redux/slices/routeSlice';
import { ExitApp } from '../../service';

const LeftMenu = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    const [modal, setModal] = useState(false)
    const id = selector.route.id

    return (
        <Container className='leftmenu'>
            <h3>💼 Vaka</h3>
            <Container className='mt-3 cc px-0'>
                <Label className='text-secondary'>Management</Label>
                <Container className='px-0'>
                    {/* <div className={id === 0 ? 'shadoww click' : 'shadoww'} onClick={() => dispatch(changePage({ id: 0 }))}><CiHome className='ml-2' /><span className='mt-1 ml-2 w-100'>Dashboard</span></div> */}
                    <div className={id === 1 || id === 8 ? 'shadoww click' : 'shadoww'} onClick={() => dispatch(changePage({ id: 1 }))}><CiGrid41 className='ml-2' /> <span className='mt-1 ml-2 w-100'>Product</span></div>
                    <div className={id === 12 ? 'shadoww click' : 'shadoww'} onClick={() => dispatch(changePage({ id: 12 }))}><CiGrid2H className='ml-2' /> <span className='mt-1 ml-2 w-100'>Product Manager</span></div>
                    {/* <div className={id === 13 ? 'shadoww click' : 'shadoww'} onClick={() => dispatch(changePage({ id: 13 }))}><CiSaveDown1 className='ml-2' /> <span className='mt-1 ml-2 w-100'>Save Store</span></div> */}
                    <div className={id === 2 || id === 9 ? 'shadoww click' : 'shadoww'} onClick={() => dispatch(changePage({ id: 2 }))}><CiGrid2V className='ml-2' /><span className='mt-1 ml-2 w-100'>Room</span></div>
                    <div className={id === 3 || id === 10 ? 'shadoww click' : 'shadoww'} onClick={() => dispatch(changePage({ id: 3 }))}><CiForkAndKnife className='ml-2' /><span className='mt-1 ml-2 w-100'>Store</span></div>
                    <div className={id === 4 || id === 11 ? 'shadoww click' : 'shadoww'} onClick={() => dispatch(changePage({ id: 4 }))}><CiBoxes className='ml-2' /><span className='mt-1 ml-2 w-100'>Structure</span></div>
                    {/* <div className={id === 5 || id === 12 ? 'shadoww click' : 'shadoww'} onClick={() => dispatch(changePage({ id: 5 }))}><CiMenuBurger className='ml-2' /><span className='mt-1 ml-2 w-100'>Work Order</span></div> */}
                    <div className={id === 6 ? 'shadoww click' : 'shadoww'} onClick={() => dispatch(changePage({ id: 6 }))}><CiUser className='ml-2' /><span className='mt-1 ml-2 w-100'>User Edit</span></div>
                    <div className={'shadoww'} onClick={() => ExitApp()}><CiLogout className='ml-2' /><span className='mt-1 ml-2 w-100'>Exit</span></div>
                </Container>
            </Container>

            <Modal isOpen={modal} toggle={() => setModal(!modal)} className='modal-dialog-centered'>
                <ModalHeader tag={'h4'} toggle={() => setModal(!modal)}>Çıkış Yap</ModalHeader>
                <ModalBody>
                    <div><Label>Çıkış yapmak istediğinize emin misiniz?</Label></div>
                    <div className='d-flex justify-content-end'>
                        <Button color='primary' onClick={() => setModal(!modal)} className='mr-3'>Hayır</Button>
                        <Button color='danger' onClick={() => { setModal(!modal); dispatch(changePage({ id: 9 })); }}>Evet</Button>
                    </div>
                </ModalBody>
            </Modal>
        </Container>
    )
}

export default LeftMenu