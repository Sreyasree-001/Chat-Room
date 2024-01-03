import { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../services/firebase';
import GoogleButton from 'react-google-button'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();


    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const userCred = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCred.user);
            const user = userCred.user
            localStorage.setItem('token', user.accessToken)
            localStorage.setItem('user', username)
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
            localStorage.setItem('token', user.accessToken)
            localStorage.setItem('user', JSON.stringify(user.displayName))
            navigate("/")
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <h1 style={{ textDecoration: "underline" }}>Login</h1>
            <form onSubmit={submitHandler}>
                <div className="form-container">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        placeholder='username'
                        required value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-container">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        placeholder='email'
                        required value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    <button
                        className="button"
                        type='submit'
                    >Login</button>
                    <div
                        style={{ display: 'flex' }}>
                        <p
                            style=
                            {{
                                textDecoration: 'underline',
                                marginRight: '10px'
                            }}>
                            log in with google</p>
                        <GoogleButton
                            style={{ width: '50px' }}
                            onClick={handleGoogle}
                        />
                    </div>
                </div>
                <div>
                    <p>Do not have any account?
                        <button
                            style={{ textDecoration: 'underline' }}
                            onClick={() => { navigate("/signup") }}
                        >SignUp
                        </button>
                    </p>
                </div>
            </form>

        </div>
    )
}

export default Login
/**
 * 
 * const submitHandler = () =>{
        if(userPass===email){
            navigate("/")
        }
        else{
            async (e) => {
                console.log("hi")
                e.preventDefault();
                try {
                    const userCred = await signInWithEmailAndPassword(auth, email, password);
                    console.log(userCred.user);
                    const user = userCred.user
                    localStorage.setItem('token', user.accessToken)
                    localStorage.setItem('user', JSON.stringify(email))
                    navigate("/")
                }
                catch (error) {
                    console.error(error)
                }
            }
        }
    }
 */