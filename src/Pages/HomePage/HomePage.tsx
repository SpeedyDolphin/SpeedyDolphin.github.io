import styles from './HomePage.module.css'
import {Link} from "react-router-dom";
import TxtBar from '../../components/txtBar/TxtBar';

function HomePage() {
  return (
    <div className={styles.HomePage}>
      <div className={styles.homePageContainer}>
        <img src="./images/backgroundTemp.jpg" className={styles.backgroundImage}></img>
        <div className={styles.left}>
          <p>hello</p>
        </div>
        <TxtBar className={styles.right}>
          <p>right</p>
        </TxtBar>

      </div>
    </div>
    );
  }
  
  export default HomePage;
  