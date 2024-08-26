
import Header from "../../components/header"
import Banner from "../../components/banner"
import Features from "../../components/features"
import Galleries from "../../components/galleries"
import Footer from "../../components/footer"

import styles from "./styles.module.scss"

const Home = () => {
  return (
    <>
      <div className={styles["home"]}>
      <Header />
      <Banner />
      <Features />
      <Galleries />
      </div>
      <Footer />
    </>
    
  )
}

export default Home
