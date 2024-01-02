


const AuthApp = () => {
    const user = localStorage.getItem('user');
    return (
        <div>
            <h1>Hello {user} welcome to the authenticated page</h1>
        </div>
    )
}

export default AuthApp
