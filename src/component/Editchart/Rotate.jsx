import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form';
import {GlobalChartBg} from '../../pages/ChartsTypesLogic/ProtectedRoutes/EditChart'
// import '../../../index.css'

const Rotate = () => {
  const {setchartRotate,chartrotate} = useContext(GlobalChartBg)
  const handleChange = (e) => {
    setchartRotate(e.target.value)
    console.log(e.target.value);
  }
  
  return (
    <>
      <div className="colorContent">
        <p className='pt-5'>Rotate</p>
        <div>
          <Form.Label>Rotate Chart</Form.Label>
          <div className='d-flex w-100 justify-content-between'>
            <p className='mb-0 d-flex align-items-center justify-content-end w-100'>{chartrotate}%</p> 
          </div>
          <Form.Range min={0} max={360} step={'0.01'} value={chartrotate} onChange={(e) => handleChange(e)} className='rangeSlider'/>
        </div>
      </div> 
    </>
  )
}

export default Rotate
