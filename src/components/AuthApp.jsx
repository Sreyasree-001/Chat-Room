
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";


const AuthApp = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <>
            {
                loading ?
                    <div className="flex flex-col items-center">
                        <ClipLoader
                            className="my-72"
                            color="green"
                            loading={loading}
                            size={50}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                    :
                    <div >
                        <Outlet />
                    </div>
            }
        </>
    )
}

export default AuthApp
