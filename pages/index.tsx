import styles from '../styles/Home.module.scss';
import Header from '../components/header';
import HomePage from '../components/home_page';
import About from '../components/about';
import Area from '../components/expertise';
import Portfolio from '../components/portfolio';
import Partenets from '../components/partenets';
import Infos from '../components/infos'
import Footer from '../components/footer'
import { motion, useScroll } from "framer-motion"


export default function Home() {
    const { scrollYProgress } = useScroll();
    return (
        <div className={`${styles.container}`}>
            <motion.div style={{ scaleX: scrollYProgress }} className=".progress-bar" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}/>  
            <Header /> 
            <HomePage />
            <About />
            <Area />
            <Portfolio />
            <Partenets />
            <Infos />
            <Footer />
        </div>
    )
}
