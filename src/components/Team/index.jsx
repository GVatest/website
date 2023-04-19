import styles from "./team.module.scss"
import SectionTitle from "../SectionTitle"


function Team() {
    return (
        <section id="team" className={styles.team}>
            <SectionTitle>Team</SectionTitle>
            <div className={styles.team_wrapper}>
                <div className={styles.item}>
                    <div className={styles.img}>
                        <img src="images/team/teammate1.webp" alt="Teammate" />
                    </div>
                    <div className={styles.info}>CEO, creator of the project</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.img}>
                        <img src="images/team/teammate2.webp" alt="Teammate" />
                    </div>
                    <div className={styles.info}>Co-founder, manager</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.img}>
                        <img src="images/team/teammate3.webp" alt="Teammate" />
                    </div>
                    <div className={styles.info}>Leading designer.</div>
                </div>
            </div>
        </section>
    )
}

export default Team