import styles from "./subtitle.module.scss"


function SubTitle(props) {

    return (
        <h3 style={props.styles} className={styles.subtitle}>{props.children}</h3>
    )
}

export default SubTitle