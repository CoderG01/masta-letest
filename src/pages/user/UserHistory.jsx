import React from 'react'
import UserHistoryCard from '../../component/UserHistoryCard'

const UserHistory = () => {
  return (
    <React.Fragment>
        <div className="userHistory py-5 ps-1 ps-lg-5">
          <div>
            <h5 className='fw-bold mb-3'>History</h5>

          </div>
            <div className='d-flex flex-wrap'>
            <UserHistoryCard imgPath={'nine'} liked={'notLiked'}/>
            <UserHistoryCard imgPath={'one'} liked={'notLiked'}/>
            <UserHistoryCard imgPath={'six'} />
            <UserHistoryCard imgPath={'three'} liked={'notLiked'}/>
            <UserHistoryCard imgPath={'seven'} liked={'notLiked'}/>
            </div>
        </div>
    </React.Fragment>
  )
}

export default UserHistory
