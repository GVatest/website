import styles from "./div.module.scss"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import SubTitle from "../subTitle";


function FeaturesDiv({custom_styles, imageSrc, imageDesc, header, subtitle, cases}) {
    const control = useAnimation()
    const [ref, inView] = useInView()

    const variant = {
        visible: {opacity: 1, transition: {duration: 0.5}},
        hidden: {opacity: 0}
    }


    useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
            control.start("hidden");
        }
      }, [control, inView]);


    return (
            <motion.div
                ref={ref}
                variants={variant}
                initial="hidden"
                animate={control}
                >
                <div style={custom_styles} className={styles.item}>
                    <div className={styles.item_img}>
                        <img src={imageSrc} alt={imageDesc} />
                    </div>
                    <div className={styles.item_content}>
                        <div className={styles.item_header}>{header}</div>
                        <SubTitle>{subtitle}</SubTitle>
                        <div className={styles.item_advantages}>
                            {cases.map((item, index) => (
                                <div key={index} style={{opacity: "1", color: "#000"}} className="button_white">{item}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        )
}

export default FeaturesDiv