import { useEffect, useState } from "react";
import { Footer } from "./Footer"
import { Header } from "./Header";
import { Nav } from "./Navbar";
import ClipLoader from "react-spinners/ClipLoader";

const UnauthApp = () => {
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
                <div className="bg-[url('https://images.pexels.com/photos/12732218/pexels-photo-12732218.jpeg?cs=srgb&dl=pexels-steve-johnson-12732218.jpg&fm=jpg')] bg-no-repeat bg-center bg-cover">
                <Nav />
                <Header />
                <Footer />
            </div>
        }
        </>
    )
}

export default UnauthApp
