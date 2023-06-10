import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { GlobalChartBg } from '../pages/ChartsTypesLogic/ProtectedRoutes/EditChart'

const ColorBox = ({ back,id }) => {
    const {SetChartBgColor} = useContext(GlobalChartBg);
    const getColor = (e) => {
        SetChartBgColor(e.target.value)
    }
    // useEffect(() => {
    //     console.log(data);
    // })
    // console.log("colorPicker", color);
    return (
        <>
            {/* <div className="box" style={{ background: back }}>
            </div> */}
            <Form.Control
                type="color"
                defaultValue={back}
                title="Choose your color"
                id={id}
                className='colorPicker'
                onChange={(e) => getColor(e)}
            />
        </>
    )
}

export default ColorBox
