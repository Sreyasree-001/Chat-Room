import { Content } from "./Content";
import { Nav } from "./Navbar";
import { Footer } from "./Footer"


const Landing = () => {
    const user = localStorage.getItem('user');
    return (
        <>
            <div className="bg-[url('https://images.pexels.com/photos/12732218/pexels-photo-12732218.jpeg?cs=srgb&dl=pexels-steve-johnson-12732218.jpg&fm=jpg')] bg-no-repeat bg-center bg-cover">
                <Nav user={user}/>
                <Content />
                <Footer />
            </div>

        </>
    )
}

export default Landing
