import styles from './HomePage.module.css'
import {Link} from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <p className={styles.header}>Hello!</p>
      <img className={styles.landingImg} src='/images/versaillesGarden.jpg' alt='Girl sitting in Versailles Garden'/>
      <Link to="/temp"> Link Test </Link>
    </div>
    );
  }
  
  export default HomePage;
  