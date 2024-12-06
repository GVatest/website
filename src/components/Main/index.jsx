import SubTitle from "../subTitle"
import image from "../../media/mainImage.webp"
import bg from "../../media/backgrounds/MainBg.webp"
import bgMobile from "../../media/backgrounds/MobileMainBg.webp"
import styles from "./main.module.scss"
import { useContext } from "react"
import Context from "../../context"


function Main() {

    const {isMobile} = useContext(Context)

    return (
        <>
            <div className={styles.bg}>
                <img src={isMobile ? bgMobile : bg} alt="Web Background" />
            </div>
            <section className={styles.main}>
                <div className={styles.main_content}>
                    <h1>Самый быстрый и простой в использовании софт для соланы</h1>
                        <SubTitle>
                            <div className={styles.subtitle_wrapper} >
                                Смотрите ниже, чтобы узнать больше о нас:
                            </div>
                        </SubTitle>
                    <div className={styles.buttons}>
                        <a href=""><div className={styles.button_buy}>Buy on Magic Eden</div></a>
                        <a href=""><div className="button_white">Go to Tools</div></a>
                    </div>
                </div>
                <img src={image} alt="Logo bulb" />
            </section>
        </>
    )
}

export default Main
