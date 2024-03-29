import { Rooms } from "../data/Rooms"
import { Link, useNavigate } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";
import { signOut } from 'firebase/auth'
import { auth } from "../services/firebase"
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export const Content = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    const handleClick = async () => {
        await signOut(auth);
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate("/login")
    }

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
                <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
                    <a href="/" aria-label="Item" className="mr-3">
                    </a>
                    <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
                        <span className="inline-block mb-2">Explore</span>
                        <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                    </h2>
                </div>
                <p className="w-full text-gray-700 lg:text-sm lg:max-w-md">
                    Click on any room of your choice. Start your conversation in
                    our public chat
                    room. Share your thoughts with the people around you.

                </p>
            </div>
            <div>
                <ul className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8 text-center">
                    {Rooms.map((room) => (
                        <li
                            className="bg-white bg-opacity-50 backdrop-blur-sm transition-shadow duration-200 hover:shadow-lg hover:shadow-black"
                            key={room.id}>
                            <Link
                                className="mb-2 text-xl font-bold leading-none sm:text-2xl"
                                to={`/room/${room.id}`}>
                                {
                                    loading ?
                                        <div className="flex flex-col items-center">
                                            <ClipLoader
                                                className="my-24"
                                                color="green"
                                                loading={loading}
                                                size={50}
                                                aria-label="Loading Spinner"
                                                data-testid="loader"
                                            />
                                        </div>
                                        :
                                        <img
                                            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                                            src={room.image}
                                            alt=""
                                        />
                                }
                                {room.title}
                            </Link>
                            <p className="text-gray-700">
                                {room.info}
                            </p>
                        </li>

                    ))}
                </ul>
            </div>
            <div className="text-center">
                <p
                    className="inline-flex items-center font-semibold space-x-1 transition-colors duration-200 text-black hover:text-blue-500"
                >
                    <button
                        onClick={handleClick}
                    >
                        Log out</button>
                    <FiLogOut />
                </p>
            </div>
        </div>
    );
};