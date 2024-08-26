import { motion } from "framer-motion";

import styles from "./styles.module.scss";

const slideAnimation = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const Footer = () => {
  return (
    <>
      <motion.div className={styles["line"]}></motion.div>
      <div className={`${styles["footer"]} row justify-content-between`}>
        <motion.ul className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
          <motion.li
            variants={slideAnimation}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring" }}
          >
            <img src="/img/Logo.png" />
            <span>DataWarehouse</span>
          </motion.li>
          <motion.li
            variants={slideAnimation}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", delay: 0.2 }}
            style={{ color: "#212353", fontWeight: "500" }}
          >
            Warehouse Society, 234{" "}
          </motion.li>
          <motion.li
            variants={slideAnimation}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", delay: 0.4 }}
            style={{
              color: "#212353",
              fontWeight: "500",
              marginBottom: "21px",
            }}
          >
            Bahagia Ave Street PRBW 29281
          </motion.li>
          <motion.li
            variants={slideAnimation}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", delay: 0.6 }}
          >
            info@warehouse.project
          </motion.li>
          <motion.li
            variants={slideAnimation}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", delay: 0.6 }}
          >
            1-232-3434 (Main)
          </motion.li>
        </motion.ul>
        <motion.ul className="col-xs-12 col-sm-12 col-md-12 col-lg-2">
          <motion.li
            variants={slideAnimation}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring" }}
          >
            About
          </motion.li>
          <motion.li
            variants={slideAnimation}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", delay: 0.2 }}
          >
            Profile
          </motion.li>
          <motion.li
            variants={slideAnimation}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", delay: 0.4 }}
          >
            Features
          </motion.li>
          <motion.li
            variants={slideAnimation}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", delay: 0.6 }}
          >
            Carrers
          </motion.li>
          <motion.li
            variants={slideAnimation}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", delay: 0.8 }}
          >
            DW News
          </motion.li>
        </motion.ul>
        <motion.ul className="col-xs-12 col-sm-12 col-md-12 col-lg-2">
          <motion.li
            variants={slideAnimation}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring" }}
          >
            Help
          </motion.li>
          <motion.li
            variants={slideAnimation}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", delay: 0.2 }}
          >
            Support
          </motion.li>
          <motion.li
            variants={slideAnimation}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", delay: 0.4 }}
          >
            Sign up
          </motion.li>
          <motion.li
            variants={slideAnimation}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", delay: 0.6 }}
          >
            Guide
          </motion.li>
          <motion.li
            variants={slideAnimation}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", delay: 0.8 }}
          >
            Reports
          </motion.li>
          <motion.li
            variants={slideAnimation}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", delay: 1 }}
          >
            Q&A
          </motion.li>
        </motion.ul>
        <motion.ul className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
          <motion.li
            variants={slideAnimation}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring" }}
          >
            Social Media
          </motion.li>
          <motion.ul
            variants={slideAnimation}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", delay: 0.2 }}
          >
            <li></li>
            <li></li>
            <li></li>
          </motion.ul>
        </motion.ul>
      </div>
      <motion.div
        variants={slideAnimation}
        initial="initial"
        whileInView="animate"
        transition={{ type: "spring" }}
        className={styles["version"]}
      >
        <ul>
          <li>
            <p>© Datawarehouse™, 2020. All rights reserved.</p>
            <p>Company Registration Number: 21479524.</p>
          </li>
          <li>
            <img src="/img/Group64.png" />
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default Footer;
