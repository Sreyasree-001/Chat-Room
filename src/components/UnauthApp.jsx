import React from 'react'
import { useAuth } from '../hooks/useAuth';

const UnauthApp = () => {
    const {login}= useAuth();

    return (
        <div>
            <div>

                <a href="#" target="_blank">
                    <img src="https://cryptologos.cc/logos/chatcoin-chat-logo.png" className="logo" alt="React logo" />
                </a>
            </div>
            <h1>Chat_Room</h1>
            <div className="card">
                <p>
                    Unauthenticated room
                </p>
                <button onClick={login}>
                    Sign-in now
                </button>
            </div>
            <p className="read-the-docs">
                <div className="container mx-auto text-center">
                    <p className="text-sm mb-2">
                        &copy; Copyright {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </p>
        </div>
    )
}

export default UnauthApp
