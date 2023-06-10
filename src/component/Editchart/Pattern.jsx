import React, { useContext, useState } from 'react'
import {GlobalChartBg} from '../../pages/ChartsTypesLogic/ProtectedRoutes/EditChart'

const Pattern = () => {
    const {Setchartbackground} = useContext(GlobalChartBg);
    const [pattern, setPattern] = useState("/sky.jpeg");
    const Patternsrc = (e) => {
        setPattern(e.target.src);
        Setchartbackground(e.target.src)
      };
    //   console.log('pattern',pattern);
    return (
        <>
            <div className="colorContent">
                <div className="py-3 mt-3 px-3">
                    <h5>Pattern presets</h5>
                    <div className="d-flex py-3 flex-wrap gap-3">
                        <img
                            src="https://images.unsplash.com/flagged/photo-1579268351234-073f85929562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGF0dGVybnN8ZW58MHx8MHx8&w=1000&q=80"
                            alt="sky char background image"
                            className="rounded"
                            style={{ width: "40%" }}
                            onClick={Patternsrc}
                        />
                        <img
                            src="https://media.istockphoto.com/id/1160720443/vector/abstract-simple-geometric-vector-seamless-pattern-with-gold-line-texture-on-white-background.jpg?s=612x612&w=0&k=20&c=_kgBISj1Wio4LTRdBFN3IttmunACCl1-T5VKdurvb68="
                            alt="space char background image"
                            className="rounded"
                            style={{ width: "40%" }}
                            onClick={Patternsrc}
                        />
                        <img
                            src="https://images.unsplash.com/photo-1572756317709-fe9c15ced298?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VvbWV0cmljJTIwcGF0dGVybnxlbnwwfHwwfHw%3D&w=1000&q=80"
                            alt="sky2 char background image"
                            className="rounded"
                            style={{ width: "40%" }}
                            onClick={Patternsrc}
                        />
                        <img
                            src="https://wallpaperaccess.com/full/1741708.jpg"
                            alt="sky3 char background image"
                            className="rounded"
                            style={{ width: "40%" }}
                            onClick={Patternsrc}
                        />
                        <img
                            src="https://media.istockphoto.com/id/1189708364/photo/abstract-white-background.jpg?s=170667a&w=0&k=20&c=vrcms32HLpKnoWaU1XNevDIeQLHq3FbTd7PXgfnBEgc="
                            alt="sky3 char background image"
                            className="rounded"
                            style={{ width: "40%" }}
                            onClick={Patternsrc}
                        />
                        <img
                            src="https://c4.wallpaperflare.com/wallpaper/334/325/188/pattern-anime-jared-nickerson-artwork-wallpaper-preview.jpg"
                            alt="sky3 char background image"
                            className="rounded"
                            style={{ width: "40%" }}
                            onClick={Patternsrc}
                        />
                    </div>
                    <p className='mt-3 cursorPointer'>+ Upload Pattern</p>
                </div>
            </div>
        </>
    )
}

export default Pattern
