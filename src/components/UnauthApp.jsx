import { useNavigate } from "react-router-dom"

const UnauthApp = () => {
    const navigate = useNavigate();

    return (
        <div className="unauth-box">
            <div>
                <a href="#" target="_blank">
                    <img src="https://cryptologos.cc/logos/chatcoin-chat-logo.png" className="logo" alt="React logo" />
                </a>
            </div>
            <h1 className="room-name">Chat_Rooms</h1>
            <div className="card">
                <p className="welcome">
                    Welcome to chat rooms
                </p>
                <button className="btn"
                onClick={() => { navigate("/login") }}>
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default UnauthApp
