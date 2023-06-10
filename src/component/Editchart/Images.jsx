import React, { useContext, useState } from 'react'
import {GlobalChartBg} from '../../pages/ChartsTypesLogic/ProtectedRoutes/EditChart'
const Images = () => {

    const [bg, setBg] = useState("/sky.jpeg");
    const {Setchartbackground} = useContext(GlobalChartBg);

    const imageSrc = (e) => {
      setBg(e.target.src);
      Setchartbackground(e.target.src)
    };
  return (
    <>
    <div className="colorContent">
        <div className="py-3 mt-3 px-3">
            <h5>Choose Image</h5>
            <div className="d-flex py-3 flex-wrap gap-3">
              <img
                src="https://images.pexels.com/photos/6160167/pexels-photo-6160167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="sky char background image"
                className="rounded"
                style={{ width: "40%" }}
                onClick={imageSrc}
              />
              <img
                src="https://cdn.pixabay.com/photo/2023/04/30/14/52/countryside-7960674_960_720.jpg"
                alt="space char background image"
                className="rounded"
                style={{ width: "40%" }}
                onClick={imageSrc}
              />
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                alt="sky2 char background image"
                className="rounded"
                style={{ width: "40%" }}
                onClick={imageSrc}
              />
              <img
                src="https://cdn.pixabay.com/photo/2023/05/02/17/33/blue-tit-7965696_960_720.jpg"
                alt="sky3 char background image"
                className="rounded"
                style={{ width: "40%" }}
                onClick={imageSrc}
              />
            </div>
            <p className='mt-3 cursorPointer'>+ Add your brand colours</p>
          </div>
    </div>
    </>
  )
}

export default Images
