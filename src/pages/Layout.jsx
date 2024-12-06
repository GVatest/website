import {useEffect, useState} from "react";
import Context from "../context";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {ParallaxProvider} from "react-scroll-parallax";
import {Outlet} from "react-router";


const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

function Layout({navState}) {
    const [isLaptopL, setIsLaptopL] = useState(getWidth() >= 1400)
    const [isMobile, setIsMobile] = useState(getWidth() < 1024)

    const onResizeListener = () => {
        setIsLaptopL(getWidth() >= 1400)
        setIsMobile(getWidth() < 1024)
    }

    useEffect(() => {
        window.addEventListener("resize", onResizeListener)
    }, [])

    return (
        <ParallaxProvider>
            <div className="App">
                <Context.Provider value={{isLaptopL, isMobile}}>
                    <Header navState={navState}/>
                    <div className="container">
                        <Outlet/>
                    </div>
                    <Footer/>
                </Context.Provider>
            </div>
        </ParallaxProvider>
    );
}

export default Layout;
