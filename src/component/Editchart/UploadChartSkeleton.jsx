import React from 'react'
import '../../assets/css/ChartTypes.css'
import {Link, useNavigate} from 'react-router-dom'

const UploadChartSkeleton = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="skeleton d-flex align-items-center justify-content-center flex-column">
        <img src="/PieChartDetail/eight.png" alt="pie chart images" className='w-75 mb-3'/>
        <Link to='edit' className='home-pagebtn mt-4 mt-md-0'>Customize Look</Link>
    </div> 
    </>
  )
}

export default UploadChartSkeleton
