import {useContext, useEffect, useRef, useState} from "react";
import Context from "../../context";
import styles from "./nav.module.scss";

function Nav({
                 children,
                 isBurgerActive,
                 navState
             }) {
    const {isMobile} = useContext(Context);
    const [navOffsetHeight, setNavOffsetHeight] = useState("-100vh");
    const navRef = useRef(null);

    useEffect(() => {
        if (navRef.current != null) {
            setNavOffsetHeight((navRef.current.offsetHeight + 20).toString());
        }
    }, [navRef.current, window.innerWidth]);


    return (
        <nav
            ref={navRef}
            style={isMobile && !isBurgerActive ? {top: -navOffsetHeight} : null}
        >
            {navState.map((item, index) => (
                <a href={item.link} className={styles.border_wrapper} key={index}>
                    <div className={styles.nav_element}>{item.text}</div>
                </a>
            ))}
            {children}
        </nav>
    );
}

export default Nav;
