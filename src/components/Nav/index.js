import { useContext, useEffect, useRef, useState } from "react"
import Context from "../../context"
import styles from "./nav.module.scss"

function Nav({children, isBurgerActive, enableBodyScroll, setIsBurgerActive}) {
    const {isMobile, isLaptopL} = useContext(Context)
    const [navOffsetHeight, setNavOffsetHeight] = useState("-100vh")
    const navRef = useRef(null)

    useEffect(() => {
        if (navRef.current != null) {
            setNavOffsetHeight((navRef.current.offsetHeight + 20).toString())
        }
    }, [navRef.current, window.innerWidth])

    const scrollTo = (elementId) => {
        if (isMobile) {
            enableBodyScroll(document)
            setIsBurgerActive(false)
            document.querySelector("nav").classList.remove("active")
        }
        const element = document.querySelector("#" + elementId)
        const yOffset = element.getBoundingClientRect().top + document.documentElement.scrollTop
        window.scrollTo({
            top: yOffset,
            behavior: "smooth"
        });
    }

    return (
        <nav ref={navRef} style={isMobile && !isBurgerActive ? {top: -navOffsetHeight} : null}>
            {isMobile || isLaptopL ? 
            <>
                <div className={styles.border_wrapper}><div className={`${styles.nav_element} ${styles.active}`}>Home</div></div>
                <div onClick={() => scrollTo("features")} className={styles.border_wrapper}><div className={styles.nav_element}>Features</div></div>
                <div onClick={() => scrollTo("roadmap")} className={styles.border_wrapper}><div className={styles.nav_element}>Roadmap</div></div>
                <div onClick={() => scrollTo("collection")} className={styles.border_wrapper}><div className={styles.nav_element}>Collection</div></div>
                <div onClick={() => scrollTo("team")} className={styles.border_wrapper}><div className={styles.nav_element}>Team</div></div>
                <div className={styles.border_wrapper}><div className={`${styles.nav_element} ${styles.acent}`}><a href="#">Tools</a></div></div>
                
            </>
            :
            <>
                <div className={styles.border_wrapper}><div className={`${styles.nav_element} ${styles.active}`}>Home</div></div>
                <div onClick={() => scrollTo("features")} className={styles.border_wrapper}><div className={styles.nav_element}>Features</div></div>
                <div onClick={() => scrollTo("collection")} className={styles.border_wrapper}><div className={styles.nav_element}>Collection</div></div>
                <div  className={styles.border_wrapper}><div className={`${styles.nav_element} ${styles.acent}`}><a href="#">Tools</a></div></div>
            </>
            }
            {children}
        </nav>
    )
}

export default Nav