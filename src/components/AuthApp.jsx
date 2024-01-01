import React from 'react'

const AuthApp = () => {
    alert("Authentication done");
    return (
        <div>
            <div>

                <a href="#" target="_blank">
                    <img src="https://cryptologos.cc/logos/chatcoin-chat-logo.png" className="logo" alt="React logo" />
                </a>
            </div>
            <h1>Chat_Room</h1>
            <h2>I am authenticated</h2>
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

export default AuthApp
