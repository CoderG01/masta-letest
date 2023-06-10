import React, { useContext, useEffect, useState } from 'react'
import { FiCheck } from 'react-icons/Fi'
import { GlobalChartBg } from '../pages/ChartsTypesLogic/ProtectedRoutes/EditChart';

const ChangeFontFamilyBox = ({ }) => {
    const {fontFamily, setfontFamily} = useContext(GlobalChartBg)
   

    const [isChecked, setisChecked] = useState(false);
    const wrapperClick = () => {
        setfontFamily(FontName);
        setisChecked(true)
    }
    return (
        <>
            {/* <div className="gap-4 px-2 py-1 pt-3 fontFamilyText rounded-1" onClick={() => wrapperClick()} key={number}> */}
                <div className='d-flex justify-content-between align-items-center pb-2 px-3'>
                    {/* <p className='mb-0'>{Font.name}</p> */}
                    {/* {state ? <FiCheck fontWeight={'bolder'} fontSize={'20'} className=""/> : ""} */}
                     {/* <FiCheck fontWeight={'bolder'} fontSize={'20'} className=""/> */}
                </div>
            {/* </div>       */}
        </>
    )
}

export default ChangeFontFamilyBox
