import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../services/firebase';
import GoogleButton from 'react-google-button'
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])


    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const userCred = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCred.user);
            const user = userCred.user
            const uid = user.uid;
            localStorage.setItem('data', uid)
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
            localStorage.setItem('data', user.uid);
            localStorage.setItem('token', user.accessToken)
            localStorage.setItem('user', user.displayName)
            navigate("/")
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            {
                loading ?
                    <div className="flex flex-col items-center">
                        <ClipLoader
                            className="my-72"
                            color="green"
                            loading={loading}
                            size={50}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                    :
                    <div className="bg-white flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <h1
                            className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 underline"
                        >Login
                        </h1>
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form
                                onSubmit={submitHandler}
                                className="space-y-6"
                            >
                                <div>
                                    <label
                                        htmlFor="username"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Username:
                                    </label>
                                    <div className='mt-2'>
                                        <input
                                            type="text"
                                            id="username"
                                            placeholder='username'
                                            required value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >Email:
                                    </label>
                                    <div>
                                        <input
                                            type="text"
                                            id="email"
                                            placeholder='email'
                                            required value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >Password:
                                    </label>
                                    <div>
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder='password'
                                            required value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        type='submit'
                                    >Login</button>
                                    <div className="flex w-full justify-center space-x-1 my-5 mx-1 underline"
                                    >
                                        <p>log in with google</p>
                                        <GoogleButton
                                            style={{ width: '50px' }}
                                            label=''
                                            onClick={handleGoogle}
                                        />
                                    </div>
                                </div>
                                <div className="flex w-full justify-center underline">
                                    <p>Do not have any account?
                                        <button
                                            className='font-semibold hover:text-blue-700'
                                            onClick={() => { navigate("/signup") }}
                                        >SignUp
                                        </button>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
            }
        </>



    )
}

export default Login