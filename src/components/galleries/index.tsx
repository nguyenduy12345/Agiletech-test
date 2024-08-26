import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.scss";

type Galleries = {
  id?: String | any;
  desctiption?: String;
  imageUrl?: String | any;
  setGalleries?: () => [];
  length: number | any;
  map: any;
};
const Galleries = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slideAnimation = {
    initial: {
      opacity: 0,
      x: 100
    },
    animate: {
      opacity: 1,
      x: 0
    }
  }
  const [galleries, setGalleries] = useState<Galleries>([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        "https://api-test-web.agiletech.vn/galleries"
      );
      setGalleries(res.data);
    };
    fetch();
  }, []);
  return (
    <motion.div 
    className={styles["galleries"]}>
      <motion.h4
         variants={slideAnimation}
         initial = 'initial'
         whileInView = 'animate'
         transition={{type: "spring", delay: 0.2}}
      >Testimonials</motion.h4>
      <motion.ul 
      className={styles['galleries__slick']}>
        <li>
          <img src="/img/Group57.png" />
        </li>
        <li>
          <img src="/img/Group58.png" />
        </li>
      </motion.ul>
      <motion.div 
        
      className="slider-container" id={styles["slider"]}>
        <Slider {...settings}>
          {galleries &&
            galleries.map((item: Galleries) => (
              <motion.div 
              variants={slideAnimation}
              initial = 'initial'
              whileInView = 'animate'
              transition={{type: "spring", delay: 0.2}}
              key={item.id} className={`${styles["galleries__item"]}`}>
                <div className={`${styles["galleries__img"]}`}>
                  <img src="/img/Ellipse76.png" />
                </div>
                <div className={`${styles["galleries__info"]}`}>
                  <h5>John Fang </h5>
                  <a href="">wordfaang.com</a>
                  <p>{item.desctiption}</p>
                </div>
              </motion.div>
            ))}
        </Slider>
      </motion.div>
    </motion.div>
  );
};

export default Galleries;
