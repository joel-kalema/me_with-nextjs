import styles from '../styles/Home.module.scss';
import HomePage from '../components/home_page';


export default function Home() {
    return (
        <div className={`${styles.container}`}>   
            <HomePage />
        </div>
    )
}
