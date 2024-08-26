
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./styles.module.scss";

const slideAnimation = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: {
    opacity: 1,
    y: 0
  }
}

const slideAnimationImage = {
  initial: {
    opacity: 0,
    x: -100
  },
  animate: {
    opacity: 1,
    x: 0
  }
}
const slideAnimationText = {
  initial: {
    opacity: 0,
    x: 100
  },
  animate: {
    opacity: 1,
    x: 0
  }
}
const Features = () => {
  return (
    <div className={`${styles["features"]}`}>
      <motion.div
        className={styles["features__title"]}
        variants={slideAnimation}
          initial = 'initial'
          whileInView = 'animate'
          transition={{ duration: 1, type: "spring"}}
      >
        <h3>Features</h3>
        <p>
          Some of the features and advantages that we provide for those of you
          who store data in this Data Warehouse.
        </p>
      </motion.div>
      <motion.ul 
          variants={slideAnimation}
          initial = 'initial'
          whileInView = 'animate'
          transition={{ duration: 1, type: "spring"}}> 
        <motion.li
           initial = {{opacity: 1}}
           whileInView={{opacity: 1}}
           transition={{type: "spring"}}
        >
          <motion.img 
            variants={slideAnimationImage}
            initial = 'initial'
            whileInView = 'animate'
            transition={{ duration: 1, type: "spring"}}
          className={styles["features__img"]} src="/img/image3.png" />
          <motion.div
             variants={slideAnimationText}
             initial = 'initial'
             whileInView = 'animate'
             transition={{ duration: 1, type: "spring"}}
          className={styles["features__info"]}>
            <h4>Search Data</h4>
            <p>
              Don’t worry if your data is very large, the Data Warehoue provides
              a search engine, which is useful for making it easier to find data
              effectively saving time.
            </p>
            <Link to="">
              <motion.div 
                whileHover={{scale: 1.1, originX: 0, originY: 0}}
                transition={{type: "spring", duration: 0.3}}
              className={styles["features__link"]}>
                <motion.span
                >Learn more</motion.span>
                <img src="/img/Group56.png" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.li>
        <motion.li
          initial = {{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{type: "spring"}}
        >
          <motion.img 
            variants={slideAnimationImage}
            initial = 'initial'
            whileInView = 'animate'
            transition={{ duration: 1, type: "spring"}}
          className={styles["features__img"]} src="/img/image4.png" />
          <motion.div
            variants={slideAnimationText}
            initial = 'initial'
            whileInView = 'animate'
            transition={{ duration: 1, type: "spring"}}
            id={styles["features__special"]}
            className={styles["features__info"]}
          >
            <h4>24 Hours Access</h4>
            <p>
              Access is given 24 hours a full morning to night and meet again in
              the morning, giving you comfort when you need data when urgent.
            </p>
            <Link to="">
              <motion.div 
              whileHover={{scale: 1.1, originX: 0, originY: 0}}
              transition={{type: "spring", duration: 0.3}}
              className={styles["features__link"]}>
                <span>Learn more</span>
                <img src="/img/Group56.png" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.li>
        <motion.li
         initial = {{opacity: 0}}
         whileInView={{opacity: 1}}
         transition={{ type: "spring"}}
        >
          <motion.img 
            variants={slideAnimationImage}
            initial = 'initial'
            whileInView = 'animate'
            transition={{ duration: 1, type: "spring"}}
          className={styles["features__img"]} src="/img/image5.png" />
          <motion.div variants={slideAnimationText}
             initial = 'initial'
             whileInView = 'animate'
             transition={{ duration: 1, type: "spring"}} className={styles["features__info"]}>
            <h4>Print Out</h4>
            <p>
              Print out service gives you convenience if someday you need print
              data, just edit it all and just print it.
            </p>
            <Link to="">
              <motion.div
                whileHover={{scale: 1.1, originX: 0, originY: 0}}
                transition={{type: "spring", duration: 0.3}}
              className={styles["features__link"]}>
                <span>Learn more</span>
                <img src="/img/Group56.png" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.li>
        <motion.li
           initial = {{opacity: 0}}
           whileInView={{opacity: 1}}
           transition={{type: "spring"}}
        >
          <motion.img 
            variants={slideAnimationImage}
            initial = 'initial'
            whileInView = 'animate'
            transition={{ duration: 1, type: "spring"}}
          className={styles["features__img"]} src="/img/image6.png" />
          <motion.div
            variants={slideAnimationText}
            initial = 'initial'
            whileInView = 'animate'
            transition={{ duration: 1, type: "spring"}}
            id={styles["features__special"]}
            className={styles["features__info"]}
          >
            <h4>Security Code</h4>
            <p>
              Data Security is one of our best facilities. Allows for your files
              to be safer. The file can be secured with a code or password that
              you created, so only you can open the file.
            </p>
            <Link to="">
              <motion.div 
                whileHover={{scale: 1.1, originX: 0, originY: 0}}
                transition={{duration: 0.3}}
              className={styles["features__link"]}>
                <span>Learn more</span>
                <img src="/img/Group56.png" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Features;
