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
        <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehIB11tqKnKhNn53ATGUSYqq4vs5WkdQ2Yg&usqp=CAU')] bg-no-repeat bg-center bg-cover h-screen">
            <Nav user={user} room={room.title}/>
            
            <div 
            className='bg-white bg-transparent text-black'
            >
                <Link
                    to="/"
                >
                    <FaAngleLeft size="25px" color='white'/>
                </Link>
            </div>
            <div className="w-full mt-4 flex flex-col flex-grow  border-solid border-white border-2 rounded-md bg-blue-900 bg-opacity-65 overflow-hidden h-3/4">
                <MessageList roomId={room.id}/>
                <Messageinput
                roomId={room.id} />
            </div>
            
        </div>
    )
}

export default ChatRoom
