
import GoogleButton from 'react-google-button'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../services/firebase';
import ClipLoader from "react-spinners/ClipLoader";

const SignUp = () => {

    const navigate = useNavigate();
    const navigateToLogin = useNavigate();
    const navigateGoogle = useNavigate();

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCred = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCred.user);
            const user = userCred.user

            localStorage.setItem('data', user.uid)
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
            const name = user.displayName
            localStorage.setItem('data', user.uid);
            localStorage.setItem('token', user.accessToken)
            localStorage.setItem('user', name)
            navigateGoogle("/")
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
                    <div className='bg-white flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
                        <h1
                            className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 underline"
                        >Sign Up
                        </h1>
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="username"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >Username:
                                    </label>
                                    <div className='mt-2'>
                                        <input
                                            type="text"
                                            id="username"
                                            placeholder='username'
                                            required value={username}
                                            onChange={(e) => { setUsername(e.target.value) }}
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
                                    <div className='mt-2'>
                                        <input
                                            type="text"
                                            id="email"
                                            placeholder='email-id'
                                            required value={email}
                                            onChange={(e) => { setEmail(e.target.value) }}
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
                                    <div className='mt-2'>
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
                                        type='submit'
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        SignUp
                                    </button>
                                </div>
                                <div className="flex w-full justify-center  ">
                                    <GoogleButton
                                        onClick={handleGoogle}
                                    />
                                </div>
                                <div className="flex w-full justify-center underline">
                                    <p>Already have an account?
                                        <button
                                            className='font-semibold hover:text-blue-700'
                                            onClick={() => { navigateToLogin("/login") }}
                                        >Log in
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

export default SignUp