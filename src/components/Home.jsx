
import { Navigate, Outlet } from 'react-router-dom';

const Home = () => {
    const token = localStorage.getItem('user')
    return (
        token ? <Outlet /> : <Navigate to="unauth" />
    )
}

export default Home
