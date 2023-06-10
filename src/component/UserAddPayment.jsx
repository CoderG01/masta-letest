import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UserAddPayment = () => {
    return (
        <React.Fragment>
            <Form className={'addPaymentForm'}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label className='ms-2'>Company Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your company name" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className='ms-2'>Billing Address</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your Billing Address"/>
                </Form.Group>
                <Button type="submit" className='billingInfoBtn'>
                    Submit
                </Button>
            </Form>
        </React.Fragment>
    )
}

export default UserAddPayment
