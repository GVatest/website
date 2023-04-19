import SectionTitle from "../SectionTitle";
import SubTitle from "../subTitle";
import styles from "./collection.module.scss"
import crack_bg from "../../media/backgrounds/CollectionBg.webp"
import dots_bg from "../../media/backgrounds/CirclesArt.webp"
import mobile_dots_bg from "../../media/backgrounds/MobileCirclesArt.webp"
import Slider from "../Slider";
import { SliderData } from "../Slider/SliderData";
import { useContext } from "react";
import Context from "../../context";


function Collection() {

    const {isMobile} = useContext(Context)

    return (
        <section id="collection" className={styles.collection}>
            <div className={styles.crack_bg}>
                <img src={crack_bg} alt="Crack Background" />
            </div>
            <div className={styles.dots_bg}>
                <img src={isMobile ? mobile_dots_bg : dots_bg} alt="Dots Background" />
            </div>
            <SectionTitle>Collection</SectionTitle>
            <div className={styles.collection_wrapper}>
                <Slider slides={SliderData}/>
                <div className={styles.content}>
                    <div className={styles.content_header}>Solution Pass</div>
                    <SubTitle>
                        Your chance to get access to a unique collection of NFTs, which will equip you with the necessary tools and software to analyze, snipe and mint without ever missing out. NFT holders will have access to all current and future developments.
                    </SubTitle>
                </div>
            </div>
        </section>
    )
}

export default Collection