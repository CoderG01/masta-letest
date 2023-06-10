import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../assets/css/Login.css'
import LogInSocialMedia from '../../component/LogInSocialMedia'
import LoginTerms from '../../component/LoginTerms'

const Login = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="mainContainer">
        <div className="mainLoginCard">
          <div className="row h-100 w-100">
            <div className="col-12 col-md-6 d-flex flex-column p-5 pe-0">
              <div className="mt-5 w-75">
                <h3 className="loginTitle">Log in or sign up</h3>
                <p className="loginInfo mt-4">Use your email or another service to continue with Masta!</p>
              </div>
              <LogInSocialMedia iconsPath={"micro"} name={'Microsoft'}/>
              <LogInSocialMedia iconsPath={"Facebook"} name={'Facebook'}/>
              <LogInSocialMedia iconsPath={"Envelope"} name={'Email'}/>
              <LogInSocialMedia iconsPath={"google"} name={'Google'}/>
              <p className='social-media-name text-center mt-4' onClick={() => navigate('/signup')}>Continue other way</p>
              <div className='pt-3 pe-3'>
                <LoginTerms />
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center py-5 d-none d-md-block ps-0">
              <img src="./LoginPageImages/logInPage.png" alt="log in page image" className='loginpageimage'/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login
