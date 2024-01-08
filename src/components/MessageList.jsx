import { useLayoutEffect, useRef } from "react"
import useMessages from "../hooks/useMessages";
import React from "react";


const MessageList = ({roomId}) => {
    const containerRef = useRef(null);
    const uid = localStorage.getItem('data');
    const messages = useMessages(roomId);

    React.useLayoutEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    });

    return (
        <div
        className="mb-4 h-full flex max-w-full max-h-full overflow-scroll overflow-x-hidden"
        ref={containerRef}
        >
            <ul 
            className="h-full w-full flex flex-col items-start"
            >
                {messages.map((x)=> (
                    <Message
                        key={x.id}
                        message={x}
                        isOwnMessage={x.uid === uid}
                    />
                ))}
            </ul>
        </div>
    )
}

function Message({message, isOwnMessage}) {
    const { displayName, text } = message;
    return (
        <li
        className={['py-2 px-4 mb-2 ml-1 bg-white border-4 text-left border-l-pink-700 rounded-md max-w-40 sm:max-w-80 md:max-w-96 lg:max-w-lg',
        isOwnMessage && 
        'bg-green-300 self-end text-right border-r-green-700 border-l-0'].join(' ')}
        >
            <h4 className="mb-2">
                {isOwnMessage ? 
                <div
                className="text-blue-800 font-bold"
                >You</div> : 
                <div
                className="text-red-800 font-bold"
                >
                {displayName}</div>}
            </h4>
            <div>
                {text}
            </div>
        </li>
    )
}

export default MessageList
