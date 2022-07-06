import styles from "./section_title.module.scss"


function SectionTitle(props) {

    return (
        <h2 className={styles.section_title}>{props.children}</h2>
    )
}

export default SectionTitle