import SectionTitle from "../SectionTitle";
import styles from "./roadmap.module.scss"
import bg from "../../media/backgrounds/RodmapArt.webp"
import mobile_bg from "../../media/backgrounds/MobileRoadmapBg.webp"
import { useContext } from "react";
import Context from "../../context";
import RoadmapDiv from "../RoadmapDiv";


function Roadmap() {
    const {isMobile} = useContext(Context)

    const cases = {
        first: ["Developing and releasing the website",
        "Finalizing all the basic features (sniper, automint, scraper) and making it available at the web version - beginning of July",
        "Integration of rarity and floor price bots into the discord server for everyone’s free usage",
        "Beta test round - 10-20th of July",
        "Whitelist & airdrop contest - TBA",
        "Mint and V1.0 release - TBA"],
        second: ["Presentation of new features, bot’s further development (revealing the wallet manager system and the system of rarity checking at the website directly)",
        "Marketplaces aggregator, integrated into the website",
        "Collecting feedback from our users and improving the community"],
        third: ["Making the marketplace of our own, including all the features needed for an ordinary user. Just one solution for everyone"],
    }

    return (
        <section id="roadmap" className={styles.roadmap}>
            <div className={styles.bg}>
                <img src={isMobile ? mobile_bg : bg} alt="Lines Background" />
            </div>
            <SectionTitle>Roadmap</SectionTitle>
            <RoadmapDiv header="PHASE I (now)" cases={cases.first}/>
            <RoadmapDiv custom_styles={{justifyContent: "flex-end"}} header="PHASE II" cases={cases.second}/>
            <RoadmapDiv header="PHASE III" cases={cases.third}/>
        </section>
    )
}

export default Roadmap