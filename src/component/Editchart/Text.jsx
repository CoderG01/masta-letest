import { GlobalStyle } from '@chakra-ui/react';
import { pad } from 'highcharts';
import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/Ai';
import { FiCheck } from 'react-icons/Fi';
import ChangeFontFamilyBox from '../../component/ChangeFontFamilyBox';
import {GlobalChartBg} from '../../pages/ChartsTypesLogic/ProtectedRoutes/EditChart'
const Text = () => {
    const { count, SetCount } = useContext(GlobalChartBg);
    const { isBold, setisBold } = useContext(GlobalChartBg);
    const [number, setNumber] = useState()
    const {fontFamily, setfontFamily} = useContext(GlobalChartBg)
    const Fdata = [
        {
            name: 'Arial',
            id: 0,
        },
        {
            name: 'Times New Roman',
            id: 1,
        },
        {
            name: 'Georgia',
            id: 2,
        }
    ]
    
    return (
        <>
            <div className="colorContent">
                <div className='mt-1 py-3 px-2 mt-3'>
                    <div className='px-2 colorWrapper pb-3'>
                        <p className='mb-1'>Recommended fonts</p>
                        {
                            Fdata.map((data, index) => {
                                return (
                                    <div onClick={() => {setNumber(index),setfontFamily(data.name)}} key={index}>
                                        {data.id === number ?
                                            <div className="gap-4 px-2 py-1 pt-3 fontFamilyText rounded-1" style={{ color: "white", background: "#40b9d1" }} >
                                                <div className='d-flex justify-content-between align-items-center pb-2 px-3'>
                                                    <p className='mb-0'>{data.name}</p>
                                                    <FiCheck fontWeight={'bolder'} fontSize={'20'} className="" />
                                                </div>
                                            </div>
                                            :
                                            <div className="gap-4 px-2 py-1 pt-3 fontFamilyText rounded-1">
                                                <div className='d-flex justify-content-between align-items-center pb-2 px-3'>
                                                    <p className='mb-0'>{data.name}</p>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='px-2 colorWrapper py-4 px-3 d-flex justify-content-between'>
                        <div className="counter" data-counter>
                            <div className="counter__btn counter__btn--minus" style={{ pointerEvents: count <= 0 ? 'none' : '', opacity: count <= 0 ? '0.4' : '1' }} onClick={() => SetCount(count - 1)}>-</div>
                            <div className="counter__input-box">
                                <input className="counter__input" type="text" value={count} disabled />
                            </div>
                            <div className="counter__btn counter__btn--plus" onClick={() => SetCount(count + 1)}>+</div>
                        </div>
                        <div className="otherFontEditOptions d-flex justify-content-center align-items-center">
                            <p className="FontEditOptions mb-0" onClick={() => setisBold(!isBold)} style={{ color: isBold ? '#19afcb' : 'black' }}>B</p>
                            <i className="FontEditOptions mb-0">I</i>
                            <u className="FontEditOptions">U</u>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Text
