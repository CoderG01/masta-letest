import React, { useEffect } from 'react'
import PlanCard from '../component/PlanCard'
import '../assets/css/Home.css'
import {
    BrowserRouter as Router, Link,
    useLocation
  } from "react-router-dom";

const Home = () => {
    
    return (
        <div>
            {/* hero section  */}
            <section className='Home-section'>
                <div className="row mx-auto">
                    {/* left */}
                    <div className="col-12 col-lg-5 P-0 p-lg-5 my-5 mt-lg-0 d-flex align-items-center justify-content-center">
                        <div className="left-side">
                            <h1 className='homepage-title pe-0 pe-lg-5 mt-4 my-lg-4'>We help you <span style={{ color: '#06ABC8', fontWeight: "bold" }}> visualize </span>data like never before!</h1>
                            <p className='home-info mb-2 pe-5'>Create your first customized chart with Masta!</p>
                            {/* <button className='home-pagebtn mt-3 mt-md-0'>Try for Free</button> */}
                                <Link to='login' className='home-pagebtn mt-4 mt-md-0'>Try For Free</Link>
                                {/* <Counter /> */}
                        </div>
                    </div>
                    {/* right */}
                    <div className="col-12 col-lg-7 px-0 px-md-5">
                        <div className="right-side d-flex align-items-center">
                            <img src="/man.png" alt="avtar" className='avtar' />
                            <div className="homepagerightblock">
                                <img src="/HomePageImages/RectangleTop.png" alt="RectangleTopImage" className='RectTop' />
                                <img src="/HomePageImages/RectangleRight.png" alt="RectangleRightImage" className='RectRight' />
                                <img src="/HomePageImages/Fruit.png" alt="Fruit" className='fruitImage' />
                                <img src="/HomePageImages/RectangleBotom.png" alt="RectangleBotom" className='RectangleBotom' />
                                <img src="./HomePageImages/mainPc.png" alt="main pc image" className="mainPcImage" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Counter /> */}
            {/* plans section */}
            <section className='plan-section'>
                {/* <div className="roundBg">
                    <img src="./HomePageImages/HomePlanBgRoundBlue.png" alt="plan page round image back" className='back-bg-round-blue'/>
                    <img src="./HomePageImages/HomePlanBgRoundWhite.png" alt="plan page round image back" className='back-bg-round-white'/>
                </div> */}
                <h1 className='text-center fw-bold Plant-title'>Great Plans for everyone</h1>
                <div className="planCardList d-flex flex-wrap mx-auto justify-content-center">
                    <PlanCard title={"Masta Free"} info={"Download and edit upto 3 charts"} btnName={"Get Started"} />
                    <PlanCard title={"Masta Premium"} info={"Download and edit unlimited charts"} btnName={"Get Started"} />
                    <PlanCard title={"Masta Collaborate"} info={"Ideal for companies for sharing charts and collaborating with teams"} btnName={"Get Started"} isComming={"true"}/>
                </div>
                <h3 className='text-center fw-bold Plan-SecondTitle'>Companies that have relied on us</h3>
                <div className="d-flex flex-wrap justify-content-around pt-5 partnersList mx-auto">
                    <img src="./HomePageImages/partners/amazon.png" alt="amazon image" className='partnerAmazon'/>
                    <img src="./HomePageImages/partners/deloitte.png" alt="deloitte image" className='partnerDeloitte'/>
                    <img src="./HomePageImages/partners/google.png" alt="google image" className='partnerGoogle'/>
                    <img src="./HomePageImages/partners/microsoft.png" alt="microsoft image" className='partnerMicrosoft'/>
                    <img src="./HomePageImages/partners/asus.png" alt="asus image" className='partnerAsus'/>
                    <img src="./HomePageImages/partners/infosys.png" alt="infosys image" className='partnerInfosys'/>
                </div>
            </section>
            {/* explore section */}
            <section className='explore-section'>
                <div className="container-fluid mx-auto">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center flex-column align-items-start">
                            <h1 className='fw-bold Plant-title'>Charts you have never seen before</h1>
                            <p className='home-info my-2 my-md-5 explore-section-info'>Browse through some really cool pre-built up charts </p>
                            <button className='exploreBtn mt-2 my-5 my-md-0'>Explore Now</button>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src="./HomePageImages/explore.png" alt="explore image" className='exploreImages'/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
