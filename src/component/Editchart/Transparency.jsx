import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form';
import {GlobalChartBg} from '../../pages/ChartsTypesLogic/ProtectedRoutes/EditChart'

const Transparency = () => {
  const {chartopacity,setopacity} = useContext(GlobalChartBg)
  const handleChange = (e) => {
    setopacity(e.target.value)
  }
  return (
    <>
      <div className="colorContent">
        <p className='pt-5'>Transparency</p>
        <div className='mt-4'>
          <Form.Label>Change Visibility</Form.Label>
          <div className='d-flex w-100 justify-content-between'>
            <p className='mb-0'>0</p> 
            <p className='mb-0'>1</p>
          </div>
          <Form.Range min={0} max={1} onChange={(e) => handleChange(e)} step={'0.01'} value={chartopacity} className="rangeSlider"/>
        </div>
      </div>
    </>
  )
}

export default Transparency
