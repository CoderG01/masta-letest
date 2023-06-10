import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/Ai'
import '../assets/css/profile.css'

const UserHistoryCard = ({imgPath,liked}) => {
    const[likeBtn ,setLikeBtn ] = useState(true);
  return (
    <React.Fragment>
        <div className="historyPageImageCard p-3 d-flex align-items-center justify-content-center position-relative m-3">
            
            {
              liked ? 
                likeBtn ? <AiFillHeart className='historyCardLikeIcon likeRed' onClick={() => setLikeBtn(false)}/> : <AiOutlineHeart className='historyCardLikeIcon' onClick={() => setLikeBtn(true)}/>  : ""
            }
            
            <img src={`/PieChartDetail/${imgPath}.png`} alt="chart type image" />
        </div>
    </React.Fragment>
  )
}

export default UserHistoryCard
