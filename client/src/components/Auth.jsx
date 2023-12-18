import React, { useState, useContext} from 'react'
import AuthForm from './AuthForm'
import { UserContext } from '../context/UserProvider'

const initInputs = {
    username: '',
    password:''
}

function Auth() {
    const { signup, login, errMsg } = useContext(UserContext)

    const [inputs, setInputs] = useState(initInputs)
    const [loggedIn, setLoggedsIn] = useState(false)

    let buttonTxt = ''

    function toggle() {
        setLoggedsIn(prevState => !prevState)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSignup(e) {
        e.preventDefault()
        signup(inputs)
    }
    function handleLogin(e) {
        e.preventDefault()
        login(inputs)
    }
    
    return (
        <div className="m-5 text-white">
           <header>
            <h1 className='text-center' >Welcome to Rock The Vote!</h1>
           </header>
           <h2 className='text-center'>Feel free to make an acount and explore!</h2>
           <br />
            {
                !loggedIn ?
                <>
                    <AuthForm 
                        inputs={inputs}
                        buttonTxt='Sign Up!'
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                    />
                   { errMsg && <h3 className='error' style={{color: 'red'}}>{errMsg}</h3> }
                   <br />
                    <h3 className='text-light' onClick={() => toggle()}>Already a User?</h3>
                </>
                :
                <>
                    <AuthForm 
                        inputs={inputs}
                        buttonTxt='Log In'
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                    />
                    <br />
                    { errMsg && <h3 className='error'style={{color: 'red'}}>{errMsg}</h3> }
                    <br />
                    <h3 className='text-light' onClick={() => toggle()}>Not a User yet?</h3>
                </>
            }
        </div>
    )
}
export default Auth