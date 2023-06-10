import React, { useState } from 'react'

const PlanCard = ({title,info,btnName,isComming}) => {
    return ( 
        <React.Fragment>
            <div className="PlanCard d-flex flex-column justify-content-center align-items-center m-3 mx-4 py-3 px-5 position-relative">
                <h4 className='planCardTitle my-3 text-center'>{title}</h4>
                <p className='planCardInfo text-center px-0 px-md-5'>{info}</p>
                <button className='Cardbtn mt-4 mb-3'>{btnName}</button>
                {
                    isComming ? <img src="./HomePageImages/commingSoon.png" alt="commingSoon image" className='comming-soon'/> : ""
                }
            </div>
        </React.Fragment>
    )
}

export default PlanCard
