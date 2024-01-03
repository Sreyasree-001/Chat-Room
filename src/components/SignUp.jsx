import './Login.css'
import GoogleButton from 'react-google-button'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../services/firebase';

const SignUp = () => {

    const navigate = useNavigate();
    const navigateToLogin = useNavigate();
    const navigateGoogle = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCred = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCred.user);
            const user = userCred.user
            localStorage.setItem('token', user.accessToken)
            localStorage.setItem('user', JSON.stringify(username))
            navigate("/")
        }
        catch (error) {
            console.error(error)
        }
    }

    const handleGoogle = async (e) => {
        e.preventDefault();
        try {
            const cred = await signInWithPopup(auth, googleProvider);
            console.log(cred);
            const user = cred.user
            localStorage.setItem('token',user.accessToken)
            localStorage.setItem('user', JSON.stringify(user.displayName))
            navigateGoogle("/")
        }
        catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <h1 style={{ textDecoration: 'underline' }}>Sign Up</h1>
            <form onSubmit={handleSubmit} className='form'>
                <div className="form-container">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        placeholder='username'
                        required value={username}
                        onChange={(e) => { setUsername(e.target.value) }}
                    />
                </div>
                <div className="form-container">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        placeholder='email-id'
                        required value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>
                <div className="form-container">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder='password'
                        required value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-controls">
                    <button type='submit'
                        className="button">SignUp</button>
                        <GoogleButton onClick={handleGoogle} />
                </div>
                <div>
                    <p>Already have an account?
                        <button onClick={() => { navigateToLogin("/login") }}
                        >Log in</button>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default SignUp

/**
 * var result = confirm("Do you want to sign in?")
        if (result == true) { login }
        console.log("hello")
        navigateGoogle("/")
 */