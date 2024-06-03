import styles from './HomePage.module.css'
import {Link} from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <p className={styles.header}>Hello!</p>
      <Link to="/temp"> Link Test </Link>
    </div>
    );
  }
  
  export default HomePage;
  