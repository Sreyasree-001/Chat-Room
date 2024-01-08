import { useEffect, useRef, useState } from "react"
import useMessages from "../hooks/useMessages";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";


const MessageList = ({ roomId }) => {
    const containerRef = useRef(null);
    const uid = localStorage.getItem('data');
    const messages = useMessages(roomId);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    React.useLayoutEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    });

    return (
        <div
            className="mb-4 h-full flex max-w-full max-h-full overflow-scroll overflow-x-hidden scrollbar scrollbar-none"
            ref={containerRef}
        >
            {
                loading ?
                    <div className="flex flex-row items-center mx-auto">
                        <ClipLoader
                            className="my-12"
                            color="white"
                            loading={loading}
                            size={50}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                    :
                    <ul
                        className="h-full w-full flex flex-col items-start"
                    >
                        {messages.map((x) => (
                            <Message
                                key={x.id}
                                message={x}
                                isOwnMessage={x.uid === uid}
                            />
                        ))}
                    </ul>
            }
        </div>
    )
}

function Message({ message, isOwnMessage }) {
    const { displayName, text } = message;
    return (
        <li
            className={['py-2 px-4 mb-2 mx-1 bg-white border-x-4 border-r-0 text-left border-l-pink-700 rounded-md max-w-40 sm:max-w-80 md:max-w-96 lg:max-w-lg',
                isOwnMessage &&
                'bg-green-300 self-end text-right border-r-4 border-r-green-700 border-l-0'].join(' ')}
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
