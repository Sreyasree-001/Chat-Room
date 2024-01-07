import { useEffect, useState } from "react"
import { getMessages } from "../services/firebase"

const useMessages = (roomId) => {
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        const unsubscribe = getMessages(roomId, setMessages);
        return unsubscribe;
    }, [roomId]);

    return messages;
}

export default useMessages
