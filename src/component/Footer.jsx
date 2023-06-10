import React from 'react'
import '../assets/css/Footer.css'

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footerCont">
        <div className="row h-100 mx-auto">
          <div className="col-12 col-md-6 d-flex align-items-center">
            <p className='footerRightsText mb-0 text-center text-md-start w-100 my-4 my-md-0'>All rights reserved</p>
          </div>
          <div className="col-12 col-md-6 d-flex gap-4 justify-content-end align-items-center footerSocialMediaWrapper my-3 my-md-0">
            <img src="/FooterImage/facebook.png" alt="facebook" className='footerSocialMediaIcon'/>
            <img src="/FooterImage/instagram.png" alt="facebook" className='footerSocialMediaIcon'/>
            <img src="/FooterImage/whatsapp.png" alt="facebook" className='footerSocialMediaIcon'/>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer
