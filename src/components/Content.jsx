import { Rooms } from "../data/Rooms"
import { Link, useNavigate } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";
import { signOut } from 'firebase/auth'
import { auth } from "../services/firebase"
export const Content = () => {

    const navigate = useNavigate();

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
                    Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem
                    accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut
                    perspiciatis unde omnis iste.
                </p>
            </div>
            <div>
                <ul className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
                    {Rooms.map((room) => (
                        <li
                            className=""
                            key={room.id}>
                            <Link
                                className="mb-2 text-xl font-bold leading-none sm:text-2xl"
                                to={`/room/${room.id}`}>
                                <img
                                    className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                                    src={room.image}
                                    alt=""
                                />
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
                    className="inline-flex items-center font-semibold space-x-1 transition-colors duration-200 text-black hover:text-white"
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