import { useNavigate } from "react-router-dom"

export const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                <svg
                    className="absolute left-0 hidden h-full  text-white transform -translate-x-1/2 lg:block"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice"
                >
                    <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                    src="https://images.pexels.com/photos/7610449/pexels-photo-7610449.jpeg"
                    alt=""
                />
            </div>
            <div className="relative flex flex-col items-start w-full max-w-xl px-4 py-8 mx-auto  md:px-0 lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-blue-300">
                        Welcome
                    </p>
                    <h2 className="mb-5 font-serif text-3xl font-bold tracking-tight text-gray-900 backdrop-blur-sm bg-gray-300 bg-opacity-30 rounded-md sm:text-4xl sm:leading-none lg:bg-transparent">
                    Connect<br/>
                        
                        {' '}
                        <span className="inline-block text-deep-purple-accent-400">
                        more with  us
                        </span>
                    </h2>
                    <p className="pr-5 mb-5 text-base text-black backdrop-blur-sm bg-gray-300 bg-opacity-30 md:text-lg lg:bg-transparent ">
                    Welcome to our chat-rooms<br/>
                    Share your thoughts and connect to the world
                    </p>
                    <div className="flex items-center">
                        <button
                            onClick={() => { navigate("/signup") }}
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-violet-900 focus:shadow-outline focus:outline-none"
                        >
                            Get started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
/**
 * <div className="py-14">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20  backdrop-blur-sm">
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                        <a href="#" className="mb-6 sm:mx-auto" target="blank">
                            <div>
                                <img src="https://cryptologos.cc/logos/chatcoin-chat-logo.png" className="logo" alt="React logo" />
                            </div>
                        </a>
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-extrabold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
                                <span className="relative inline-block">
                                    <svg
                                        viewBox="0 0 52 24"
                                        fill="currentColor"
                                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                    >
                                        <defs>
                                            <pattern
                                                id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                                                x="0"
                                                y="0"
                                                width=".135"
                                                height=".30"
                                            >
                                                <circle cx="1" cy="1" r=".7" />
                                            </pattern>
                                        </defs>
                                        <rect
                                            fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                                            width="52"
                                            height="24"
                                        />
                                    </svg>
                                    <span className="relative">Connect</span>
                                </span>{' '}
                                more with us
                            </h2>
                            <p className="text-base text-black md:text-lg">
                                Welcome to our chat-rooms<br/>
                                Share your thoughts and connect to the world
                            </p>
                        </div>
                        <div>
                            <button className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md hover:text-black bg-sky-600 hover:bg-blue-800 focus:shadow-outline focus:outline-none"
                                onClick={() => { navigate("/signup") }}>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 */