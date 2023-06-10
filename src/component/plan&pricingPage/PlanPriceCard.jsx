import React from 'react'
import CommonButton from '../CommonButton'

const PlanPriceCard = ({isComming}) => {
  return (
    <React.Fragment>
        <div className="planPriceCard p-4 p-sm-5 position-relative">
            <div className='my-3'>
                <h4 className='card-title my-3'>Masta Free</h4>
                <p className='text-justify card-text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
            <h2 className='card-price text-bold my-4'>₹ 0.00 <span className='fs-xs ms-2'>/month</span></h2>
            <ul className='featureList ps-0 my-0 my-sm-3'>
                <h6 className='fw-normal mt-1 ps-0 mb-3'>Features:</h6>
                    <li><img src='./pricePlanImages/check.png' className='mx'/>Lorem ipsum dolor sit amet</li>
                    <li><img src='./pricePlanImages/check.png' className='mx'/>Lorem ipsum dolor sit amet</li>
                    <li><img src='./pricePlanImages/cancel.png' className='mx'/>Lorem ipsum dolor sit amet</li>
                    <li><img src='./pricePlanImages/cancel.png' className='mx'/>Lorem ipsum dolor sit amet</li>
            </ul>
            {
                    isComming ? <img src="./HomePageImages/commingSoon.png" alt="commingSoon image" className='comming-soon'/> : ""
                }
            <div className='my-2 mt-5 cardBtn'>
                <CommonButton name={"Get Started"} bgColor={'#06ABC8'} fColor={'white'} />
            </div>
        </div>
    </React.Fragment>
  )
}

export default PlanPriceCard
