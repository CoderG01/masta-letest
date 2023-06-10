import React, { useState } from 'react'
import '../../assets/css/profile.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import UserAddPayment from '../../component/UserAddPayment'

const UserPayment = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="userHistory py-5 ps-1 ps-lg-5">
                <h5 className='fw-bold mb-5'>Payment</h5>
                <p className='text-capitalize my-4 subtitle'>Payment method for your Plan</p>
                <p className='addPaymentPara'><a className='addPayment me-1' onClick={handleShow}>Add a payment method </a>so you can purchase premium charts and more chart versions for ₹50.00 a piece</p>
                <div className='pb-5'>
                    <h4 className='title fw-bold'>Masta Credits</h4>
                    <div className="subtitle"><p className="mb-0 mt-3">You have 36 Masta credits.</p></div>
                </div>
                <div className='d-flex flex-wrap d-flex flex-column'>
                    <h4 className='title fw-bold mb-4'>Billing information</h4>
                    <UserAddPayment />
                </div>
                <Modal show={show} onHide={handleClose} size="lg" centered className='paymentModal'>
                    <Modal.Header closeButton className='border-bottom-none'>
                        <Modal.Title className='py-4 pb-1 mx-auto'>Add a payment method</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'><Form className={'addPaymentForm'}>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label className='ms-2'>Card Number</Form.Label>
                            <Form.Control type="number" placeholder="Enter your Card number" />
                        </Form.Group>
                        <div className="row">
                            <div className="col-12 col-md-6 p-1">
                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Label className='ms-2'>Expiry Date</Form.Label>
                                    <Form.Control type="date" placeholder="Enter your company name" />
                                </Form.Group>
                            </div>
                            <div className="col-12 col-md-6 p-1">
                                <Form.Group className="m-1 mb-4" controlId="formBasicEmail">
                                    <Form.Label className='ms-2'>CVV</Form.Label>
                                    <Form.Control type="text" placeholder="CVV" />
                                </Form.Group>
                            </div>

                        </div>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer className='d-flex align-items-center justify-content-center pb-4 gap-3 border-top-none'>
                        <Button className='billingInfoBtn modalCancel' onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button type="submit" className='billingInfoBtn'>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>


            </div>

        </div>
    )
}

export default UserPayment
