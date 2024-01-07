import { useState } from "react"
import { sendMessage } from "../services/firebase"

const Messageinput = ({ roomId }) => {
    const user = localStorage.getItem('user')
    const uid = localStorage.getItem('data')
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(roomId, user, uid, value);
        setValue("")
    }
    return (
        <div>
            <form
                className="flex gap-1 mb-1"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="Enter a message"
                    required
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    minLength={1}
                    className="pt-3 pl-2 flex-1 bg-white rounded-2xl bottom-0"
                />
                <button
                    type="submit"
                    disabled={value < 1}
                    className="pt-3 px-3.5 bg-green-400 cursor-pointer rounded-md font-serif font-semibold hover:bg-green-600 hover:text-white"
                >
                    Send
                </button>
            </form>
        </div>
    )
}

export default Messageinput
