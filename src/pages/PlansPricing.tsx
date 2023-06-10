import React from 'react'
import '../assets/css/planPrice.css'
import PlanPriceCard from '../component/plan&pricingPage/PlanPriceCard'

const PlansPricing = () => {
  return (
    <React.Fragment>
      {/* plans & pricing section */}
      <section className='planPriceSection pt-4'>
        <h3 className='text-center font-weight-normal my-4'>Plans Pricing</h3>
        <div className='d-flex align-items-center justify-content-center gap-5 flex-wrap pb-4'>
          <PlanPriceCard isComming={false}  />
          <PlanPriceCard isComming={false}  />
          <PlanPriceCard isComming={true}/>
        </div>
      </section>
    </React.Fragment>
  )
}

export default PlansPricing
