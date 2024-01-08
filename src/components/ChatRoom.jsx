import { Link, useParams } from 'react-router-dom'
import { Rooms } from "../data/Rooms"
import { Nav } from "./Navbar"
import Messageinput from './Messageinput'
import  MessageList from "./MessageList"
import { FaAngleLeft } from "react-icons/fa6";

const ChatRoom = () => {
    const user = localStorage.getItem('user')
    const params = useParams();
    const room = Rooms.find(
        (x) => x.id === params.id
    );
    if (!room) {
        //TODO:404
    }
    return (
        <>
        <div className="bg-[url('https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-2649403.jpg&fm=jpg')] bg-no-repeat bg-center bg-cover h-screen">
        <Nav user={user} room={room.title}/>
            <div 
            className='bg-white w-5 ml-1 rounded-sm'
            >
                <Link
                    to="/"
                >
                    <FaAngleLeft size="25px"/>
                </Link>
            </div>
            <div className="w-full mt-4 mx-auto flex flex-col flex-grow  border-solid border-white border-2 rounded-md overflow-hidden h-3/4 sm:max-w-xl md:max-w-xl lg:max-w-5xl">
                <MessageList roomId={room.id}/>
                <Messageinput
                roomId={room.id} />
            </div>
            
        </div>
        </>
    )
}

export default ChatRoom
