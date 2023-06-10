import React from 'react'
import '../assets/css/Login.css'


const LogInSocialMedia = ({iconsPath,name}) => {
    return (
        <React.Fragment>
            <div className='logInSocialMedia d-flex align-items-center px-4 mt-4'>
                <div className="row h-100 w-100">
                    <div className="col-3 d-flex align-items-center">
                       {/* <img src="./LoginPageImages/micro.png" alt="" /> */}
                       <img src={`./LoginPageImages/${iconsPath}.png`} alt="social icons" className='social-media-icons'/>
                    </div>
                    <div className="col-9 d-flex align-items-center">
                        <p className='social-media-name mb-0 mobile-text'>Continue with {name}</p>
                    </div>
                </div>
                
            </div>
        </React.Fragment>
    )
}

export default LogInSocialMedia
