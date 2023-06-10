import React, { useRef, useState } from 'react'
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/Ai'
import '../../assets/css/SignUp.css'
import {useNavigate} from "react-router-dom"


const SignUp = () => {
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState();
    const pass = useRef();
    const fname = useRef();
    const showPassInfo = () => {
        setShowPass(!showPass)
        {
            showPass ?
                pass.current.type = 'text'
                :
                pass.current.type = 'password'
        }
        console.log(showPass);
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (fname.current.value=="admin" && pass.current.value=="admin@123") {
            localStorage.setItem('username', fname.current.value)
            localStorage.setItem('userpassword', pass.current.value)
            navigate('/')
        }
    }
    return (
        <>
            <div className="container-fluid mainWrap">
                <div className="login-box">
                    <img
                        src="/navlogo.png"
                        className="avatar"
                    />
                    <h1 className='my-3 mb-5'>Sign Up Here</h1>
                    <form onSubmit={handleSubmit}>
                        <p>First Name</p>
                        <input type="text" name="firstname" ref={fname}  />
                        <p className='mt-2'>Password</p>
                        <div className='position-relative'>
                            <input type="password" name="password"  ref={pass} />
                            <h1 className='eyeIcon'>{showPass ? <AiFillEye onClick={() => showPassInfo()} /> : <AiOutlineEyeInvisible onClick={() => showPassInfo()} />}</h1>
                        </div>
                        <input type="submit" name="submit" defaultValue="Login" className='mt-5 submitBtn' />
                    </form>
                </div>
            </div>

        </>
    )
}

export default SignUp
