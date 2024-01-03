import { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const userCred = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCred.user);
            const user = userCred.user
            localStorage.setItem('token', user.accessToken)
            localStorage.setItem('user',email)
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
                </div>
                <div>
                    <p>Do not have any account?
                        <button onClick={() => { navigate("/signup") }}
                        >SignUp</button>
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