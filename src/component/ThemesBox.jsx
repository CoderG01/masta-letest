import React, { useContext, useEffect } from 'react'
import {GlobalChartBg} from '../pages/EditChart'

const ThemesBox = ({themeGredient}) => {
  
  const {SetlinearGradient} = useContext(GlobalChartBg);
  
  const handleClick = (e) => {
    SetlinearGradient(e.target.style.background)
  }
  return (
    <>
    <div className="themeBox" style={{background : themeGredient}} onClick={(e) => handleClick(e)}>

    </div> 
    </>
  )
}

export default ThemesBox
