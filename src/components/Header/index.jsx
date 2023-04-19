import "./header.scss"
import Nav from "../Nav"
import Social from "../Social"
import Logo from "../Logo"
import { useContext, useState } from "react"
import Context from "../../context"
import {HamburgerSpring} from "react-animated-burgers"
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';


function Header() {

    const {isMobile} = useContext(Context)
    const [isBurgerActive, setIsBurgerActive] = useState(false)

    const toggleBurger = () => {
        setIsBurgerActive(!isBurgerActive)
        document.querySelector("nav").classList.toggle("active")
        if (document.querySelector("nav").classList.contains("active")) {
            disableBodyScroll(document)
        } else {
            enableBodyScroll(document)
        }
    }

    return (
        <div className="header_border_wrapper">
            <header>
                {!isMobile ?
                    <>
                        <Logo>
                            <span style={{fontSize: "25px", fontWeight: "500"}}>Solution</span>
                        </Logo>
                        <Nav/>
                        <Social/>
                    </>
                :
                    <>
                        <Logo>
                            <span style={{fontSize: "22px", fontWeight: "500"}}>Solution</span>
                        </Logo>
                        <Nav enableBodyScroll={enableBodyScroll} setIsBurgerActive={setIsBurgerActive} isBurgerActive={isBurgerActive}>
                            <Social/>
                        </Nav>
                        <HamburgerSpring style={{right: "20px", position: "fixed", padding: "0", zIndex: 1002}} isActive={isBurgerActive} toggleButton={toggleBurger} barColor="white"/>
                    </>
                }
            </header>
        </div>

    )
}

export default Header