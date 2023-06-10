import React from 'react'
// import '../assets/css/index.css'

const ShadowLightBtn = ({px,btnName,data}) => {
  return (
    <>
      <button className={`globallightshadowBtn px-${px}`} onClick={data}>{btnName}</button>
    </>
  )
}

export default ShadowLightBtn
// onClick={() => yeye()}