import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'

import styles from "./styles.module.scss"



const Header = () => {
  const [isLogin, setIsLogin ] = useState<Boolean>(false)
  const handleLogout = async() => {
    setIsLogin(false)
    localStorage.removeItem("ACCESS_TOKEN")
    await axios.delete('https://api-test-web.agiletech.vn/auth/logout')
  }
  let token: string | null = localStorage.getItem("ACCESS_TOKEN");
  useEffect(() => {
    const getToken = async () => {
      if (!token) {
        setIsLogin(false);
        return false;
      } else {
        setIsLogin(true)
        token = JSON.parse(token);
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        return true;
      }
    };
    getToken();
  });
  return (
    <div className={styles["header"]}>
        <Link to="/home"><motion.img 
          whileHover={{scale: 1.2}}
          transition={{type: "spring", duration: 0.3}}
        src="/img/Logo.png" alt="This is logo icon"/></Link>
        <ul>
          {  
          isLogin ? 
          <>
            <Link to="/profile"><motion.li 
              whileHover={{scale: 1.05}}
              transition={{type: "spring", duration: 0.3}}
            >Profile</motion.li></Link>
            <Link to=""><motion.li 
              whileHover={{scale: 1.05}}
              transition={{type: "spring", duration: 0.3}}
            onClick={handleLogout}>Logout</motion.li></Link>
          </> :
            <Link to="/signin"><motion.li
              whileHover={{scale: 1.05}}
              transition={{type: "spring", duration: 0.3}}
            >Sign In</motion.li></Link>
          }
        </ul>
        <p>Menu</p>
    </div>
  )
}

export default Header
