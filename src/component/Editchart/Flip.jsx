import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form';
import { MdFlipCameraAndroid } from 'react-icons/Md';
import {GlobalChartBg} from '../../pages/ChartsTypesLogic/ProtectedRoutes/EditChart'
const Flip = () => {
  const {flipChartY, setflipChartY} = useContext(GlobalChartBg)
  // const handleChangeX = (e) => {
  //   setflipChartX(e.target.value)
  // }
  const handleChangeY = (e) => {
    setflipChartY(e);
  }
  return (
    <>
      <div className="colorContent">

        <div>
          {/* <div className='d-flex w-100 justify-content-between'>
            <Form.Label>Horizontally</Form.Label>
            <p className='mb-0'>{flipChartX}%</p>
          </div>
          <Form.Range min={0} max={360} value={flipChartX} onChange={(e) => handleChangeX(e)} step={'0.01'} className="rangeSlider" /> */}
          <div className='mt-3'>
            <div className='d-flex w-100 justify-content-between'>
              <div className='mt-3'>
              <Form.Label className='my-3'>Flip Verically 180 deg</Form.Label>
              <button className='flipButton d-flex align-items-center justify-content-center gap-1' onClick={() => flipChartY=='180' ? handleChangeY('0') : handleChangeY('180')}><MdFlipCameraAndroid className='rotateIcon'/>Flip</button>
              </div>
            </div>
            {/* <Form.Range min={0} max={180} value={flipChartY} onChange={(e) => handleChangeY(e)} step={'180'} className="rangeSlider" /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Flip
