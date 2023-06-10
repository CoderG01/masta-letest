import React from 'react'
import UserHistoryCard from '../../component/UserHistoryCard'

const UserFavorite = () => {
    return (
        <div>
            <div className="userHistory py-5 ps-1 ps-lg-5">
                <h5 className='fw-bold mb-3'>Favorites</h5>
                <div className='d-flex flex-wrap'>
                    <UserHistoryCard imgPath={'nine'} liked={'notLiked'} />
                    <UserHistoryCard imgPath={'one'} liked={'notLiked'} />
                    <UserHistoryCard imgPath={'six'} liked={'notLiked'}/>
                    <UserHistoryCard imgPath={'three'} liked={'notLiked'} />
                    <UserHistoryCard imgPath={'seven'} liked={'notLiked'} />
                </div>
            </div>
        </div>
    )
}

export default UserFavorite
