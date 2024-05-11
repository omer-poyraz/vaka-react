import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import direction from '../../utilities'
import { Button, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { changePage } from '../../redux/slices/routeSlice'

const Content = () => {
    const selector = useSelector((state) => state)
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const [exit, setExit] = useState(false)

    return (
        <div>
            {
                direction[selector.route.id]
            }
            <Modal isOpen={exit} toggle={() => setExit(!exit)} className='modal-dialog-centered'>
                <ModalHeader tag={'h4'} toggle={() => { setExit(!exit); setModal(!modal); }}>Çıkış Yap</ModalHeader>
                <ModalBody>
                    <div><Label>Çıkış yapmak istediğinize emin misiniz?</Label></div>
                    <div className='d-flex justify-content-end'>
                        <Button color='primary' onClick={() => { setExit(!exit); setModal(!modal) }} className='mr-3'>Hayır</Button>
                        <Button color='danger' onClick={() => { setExit(!exit); setModal(!modal); dispatch(changePage({ id: 9 })); }}>Evet</Button>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Content