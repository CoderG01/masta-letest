
import { GlobalChartBg } from '../../pages/ChartsTypesLogic/ProtectedRoutes/EditChart'
import React, { useContext, useRef } from 'react'
import Rotate from './Rotate'

const ShapeBox = ({clicPathName, ClipPathData}) => {
const {setShapePath} = useContext(GlobalChartBg)
// const {} = useContext(GlobalChartBg)
const GetClipPathShape = () => {
    setShapePath(ClipPathData);
}
// console.log(shapePath);
  return (
    <>
    <div className="chartShapeBox" style={{clipPath:`${clicPathName}(${ClipPathData})`}} onClick={GetClipPathShape}>

    </div>
    </>
  )
}

export default ShapeBox
