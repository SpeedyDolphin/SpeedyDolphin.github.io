import styles from './HomePage.module.css'
import {Link} from "react-router-dom";
import TxtBar from '../../components/txtBar/TxtBar';

function HomePage() {
  return (
    <div className={styles.HomePage}>
      <div className={styles.homePageContainer}>
        <img src="./images/backgroundTemp.jpg" className={styles.backgroundImage}></img>

        <div className={styles.left}>
          <div className={styles.titleText}>
            <h1>Athena Rubio</h1>
            <h5>Software Dev ✦ Artist</h5>

            <div className='linkButtons'>
              <button type="button">LinkedIn</button>
              <button type="button">Github</button>
            </div>

          </div>

         
        </div>

        <TxtBar className={styles.right}>
          <p>right</p>
        </TxtBar>

      </div>
    </div>
    );
  }
  
  export default HomePage;
  