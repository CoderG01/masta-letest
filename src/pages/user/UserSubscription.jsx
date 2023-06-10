import React from 'react'
import '../../assets/css/profile.css'

const UserSubscription = () => {
    return (
        <div>
            <div className="userSubscrioption py-5 ps-1 ps-lg-5">
                <h5 className='fw-bold mb-3 px-4 px-md-0'>Subscription</h5>
                <div className='d-flex flex-column'>
                    <p className='subtitle mt-4 mb-4 px-4 px-md-0'>Current Subscription Plan</p>
                    <div className="subscriptionCard p-4 py-4 d-flex flex-column px-5">
                        <div className='d-flex justify-content-between title mt-3'>
                            <h3 className='font-weight-bold'>Masta Pro</h3>
                            <h1 className="price">₹ 289.00 <span>/month</span></h1>
                        </div>
                        <p className='info py-4 mb-0'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
                        <div className="features pt-3">
                            <h6>Features:</h6>
                            <div className="row featuresRow">
                                <div className="col-12 col-md-6">
                                    <ul className='ps-0'>
                                        <li><img src='/pricePlanImages/check.png' className='mx checkCancelIcn' />Lorem ipsum dolor sit amet</li>
                                        <li><img src='/pricePlanImages/check.png' className='mx checkCancelIcn' />Lorem ipsum dolor sit amet</li>
                                        <li><img src='/pricePlanImages/cancel.png' className='mx checkCancelIcn' />Lorem ipsum dolor sit amet</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-md-6">
                                    <ul className='ps-0'>
                                        <li><img src='/pricePlanImages/cancel.png' className='mx checkCancelIcn' />Lorem ipsum dolor sit amet</li>
                                        <li><img src='/pricePlanImages/check.png' className='mx checkCancelIcn' />Lorem ipsum dolor sit amet</li>
                                        <li><img src='/pricePlanImages/cancel.png' className='mx checkCancelIcn' />Lorem ipsum dolor sit amet</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center mt-3 flex-column'>
                                <button className='subscriptionBtn px-4 py-2 pb-1 mx-auto'>Upgrade to Masta Collaborate</button>
                            <p className='otherPlans mx-auto mt-4'>Browse other Plans</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSubscription
