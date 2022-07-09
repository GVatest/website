import styles from "./features.module.scss"
import SectionTitle from "../SectionTitle"
import sniperArt from "../../media/featuresArts/sniperArt.webp"
import scraperArt from "../../media/featuresArts/scraperArt.webp"
import minterArt from "../../media/featuresArts/minterArt.webp"
import SubTitle from "../subTitle"
import { useContext } from "react"
import Context from "../../context"
import FeaturesDiv from "../FeaturesDiv"

function Features() {

    const {isMobile} = useContext(Context)

    const cases = {
        first: ["High speed",
                "Quicker than listing",
                "New algorithms"],
        second: ["Complete information",
                "Any collection",
                "On blockchain"],
        third: ["Desktop minter",
                "Faster than others",
                "Easy to use"],
    }

    return (
        <section id="features" className={styles.features}>
            <SectionTitle>Features</SectionTitle>
            {!isMobile ?
            <>
            <FeaturesDiv 
                header="Live Time Sniper"
                subtitle="A vital tool for any solana enthusiast. The software snipes any NFT at the same time it appears on the market."
                cases={cases.first}
                imageDesc="Aims"
                imageSrc={sniperArt}/>
            <FeaturesDiv 
                header="Scraper"
                subtitle="Quick access to real-time information on any NFT on Solana: floor, rarity, volume and even more."
                cases={cases.second}
                custom_styles={{flexDirection: "row-reverse"}}
                imageDesc="Scraper"
                imageSrc={scraperArt}/>
            <FeaturesDiv 
                header="Minter"
                subtitle="Fed up seeing transactions errors while minting? With us, be among the first to secure your NFTs. Our bot will be available on Windows, providing the best performance and user-friendly experience."
                cases={cases.third}
                imageDesc="NFTS"
                imageSrc={minterArt}/>
        </>
        :
        <>
            <div className={styles.item}>
                <div className={styles.item_content}>
                    <div className={styles.item_img}>
                        <img src={sniperArt} alt="Aims" />
                    </div>
                    <div className={styles.item_header}>Live Time Sniper</div>
                    <SubTitle>Snipe any NFT straight of the blockchain before it's even listed on Magic Eden with autobuy function</SubTitle>
                    <div className={styles.item_advantages}>
                        <div style={{opacity: "1", color: "#000"}} className="button_white">On Chain</div>
                        <div style={{opacity: "1", color: "#000"}} className="button_white">Faster than others</div>
                        <div style={{opacity: "1", color: "#000"}} className="button_white">Easy to use</div>
                    </div>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.item_content}>
                    <div className={styles.item_img}>
                        <img src={scraperArt} alt="Scraper" />
                    </div>
                    <div className={styles.item_header}>Scraper</div>
                    <SubTitle>View all the NFTs of any collection</SubTitle>
                    <div className={styles.item_advantages}>
                        <div style={{opacity: "1", color: "#000"}} className="button_white">See all the rarities</div>
                        <div style={{opacity: "1", color: "#000"}} className="button_white">Very nice and User-Friendly</div>
                        <div style={{opacity: "1", color: "#000"}} className="button_white">Search by attributes and by the name/id</div>
                    </div>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.item_content}>
                    <div className={styles.item_img}>
                        <img src={minterArt} alt="NFTS" />
                    </div>
                    <div className={styles.item_header}>Minter</div>
                    <SubTitle>Snipe any NFT straight of the blockchain before it's even listed on Magic Eden with autobuy function</SubTitle>
                    <div className={styles.item_advantages}>
                        <div style={{opacity: "1", color: "#000"}} className="button_white">On Chain</div>
                        <div style={{opacity: "1", color: "#000"}} className="button_white">Easy to use</div>
                        <div style={{opacity: "1", color: "#000"}} className="button_white">Faster than others</div>
                    </div>
                </div>
            </div>
        </>
        }
        </section>
        
        
    )
}

export default Features