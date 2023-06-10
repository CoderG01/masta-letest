import React from 'react'
import { useNavigate } from "react-router-dom";



const CommonButton = ({bgColor,name, fColor,path}) => {
  const navigate = useNavigate();
  return (
    <div>
      <button className="nav-button me-1 px-4 w-100" onClick={()=>navigate(`/${path}`)} style={{background : bgColor,color : fColor,borderRadius : "12px"}}>{name}</button>
    </div>
  )
}

export default CommonButton
