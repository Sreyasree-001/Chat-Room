import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
export const Nav = ({ user, room }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-gray-900 bg-opacity-50 font-serif">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <a
                        href="/"
                        aria-label="Chat_Rooms"
                        title="Chat_Rooms"
                        className="inline-flex items-center"
                    >
                        <span className="ml-2 text-4xl font-bold tracking-wide text-gray-100">
                            {room ? room : <>ChatRoom</>}
                        </span>
                    </a>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        {user ?
                            <div className="text-white flex flex-row px-2">
                                {user}
                                <FaUserCircle />
                            </div> :
                            <></>
                            // <li>
                            //     <a
                            //         href="/signup"
                            //         className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-500 hover:bg-violet-900 focus:shadow-outline focus:outline-none"
                            //         aria-label="Sign up"
                            //         title="Sign up"
                            //     >
                            //         Sign up
                            //     </a>
                            // </li>
                        }
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-200" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-2 bg-gray-900 border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>

                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-white" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4 bg-gray-300">
                                            {user ?
                                                <div className="text-white flex flex-row px-2">
                                                    {user}
                                                    <FaUserCircle />
                                                </div> :
                                                <></>
                                                // <li>
                                                //     <a
                                                //         href="/signup"
                                                //         className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-500 hover:bg-violet-900 focus:shadow-outline focus:outline-none"
                                                //         aria-label="Sign up"
                                                //         title="Sign up"
                                                //     >
                                                //         Sign up
                                                //     </a>
                                                // </li>
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
