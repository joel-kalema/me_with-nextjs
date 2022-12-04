import styles from '../styles/Home.module.scss';
import HomePage from '../components/home_page';
import About from '../components/about';
import Area from '../components/expertise';
import Portfolio from '../components/portfolio';
import Partenets from '../components/partenets';


export default function Home() {
    return (
        <div className={`${styles.container}`}>   
            <HomePage />
            <About />
            <Area />
            <Portfolio />
            <Partenets />
        </div>
    )
}
