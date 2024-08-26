import { motion } from "framer-motion"

import styles from "./styles.module.scss";

const Banner = () => {
  return (
    <motion.div
      variants={{
        hidden: {opacity: 0, scale: 0.5, x: 100},
        visible: {opacity: 1, scale: 1, x: 0}
      }}
      initial = "hidden"
      animate = "visible"
      transition={{ duration: 0.5, delay: 0.2 }}
      className={styles["banner"]}>
      <h3>Save your data storage here.</h3>
      <img src="/img/image1.png" />
      <p>
        Data Warehouse is a data storage area that has been tested for security,
        so you can store your data here safely but not be afraid of being stolen
        by others.
      </p>
      <motion.a  
        whileHover={{scale: 1.2}}
        transition={{type: "spring", duration: 0.3}}
      href=''>Learn more</motion.a>
      
    </motion.div>
  );
};

export default Banner;
