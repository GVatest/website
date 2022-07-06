import styles from "./div.module.scss"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


function RoadmapDiv({custom_styles, header, cases}) {
    const control = useAnimation()
    const [ref, inView] = useInView()

    const variant = {
        visible: {opacity: 1, transition: {duration: 0.5}},
        hidden: {opacity: 0}
    }


    useEffect(() => {
        if (inView) {
          control.start("visible");
        }
    }, [control, inView]);


    return (
            <motion.div
                ref={ref}
                variants={variant}
                initial="hidden"
                animate={control}
                >
            <div style={custom_styles} className={styles.item_wrapper}>
                <div className={styles.item}>
                    <div className={styles.item_header}>{header}</div>
                    <ul>
                        {cases.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            </motion.div>
        )
}

export default RoadmapDiv