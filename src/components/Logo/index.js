import styles from "./logo.module.scss"
import logo from "../../media/logo.webp"


function Logo(props) {

    return (
        <div className={styles.logo}>
            <img src={logo} alt="Logo" />
            <div className={styles.text}>
                {props.children}
            </div>
        </div>
    )
}

export default Logo