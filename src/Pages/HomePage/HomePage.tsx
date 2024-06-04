import styles from './HomePage.module.css'
import {Link} from "react-router-dom";
import TxtBar from '../../components/txtBar/TxtBar';

function HomePage() {
  return (
    <div className={styles.HomePage}>
      <div className={styles.homePageContainer}>
        <TxtBar className={styles.left}>
          {/* <p>Hello!</p> */}
          <></>
        </TxtBar>

      </div>
    </div>
    );
  }
  
  export default HomePage;
  