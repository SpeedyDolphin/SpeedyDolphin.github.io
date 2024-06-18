import styles from './HomePage.module.css'
import {Link} from "react-router-dom";
import ImageButton from '../../components/imageButton/imageButton';
import rawData from './data.json';
import Entry from '../../components/entries/Entry';

interface txtBarData {
  /** Child components */
  title : string
  content? : string
  subContent? : txtBarData[]
}

const data : any = rawData

function HomePage() {
  return (
    <div className={styles.HomePage}>
      <div className={styles.homePageContainer}>
        <img src="./images/backgroundTemp.jpg" alt='' className={styles.backgroundImage}></img>

        <div className={styles.left}>
          <div className={styles.titleText}>
            <h1>Athena Rubio</h1>
            <h5>Software Dev ✦ Artist</h5>

            <div className={styles.linkButtons}>
              <ImageButton src='./images/LinkedInIcon.png' alt='LinkedIn Icon' link='https://www.linkedin.com/in/athenarubio/'/>
              <ImageButton src='./images/GithubIcon.png' alt='Github Icon' link='https://github.com/SpeedyDolphin'/>
            </div>

          </div>

         
        </div>

        <div className={styles.right}>
          <p>Coming Soon!</p>
           {/* Populate my life */}
           {data.map((entry : txtBarData) => (
            <Entry title={entry.title} content={entry.content} subContent={entry.subContent}></Entry>
           ))}

        </div>

      </div>
    </div>
    );
  }
  
  export default HomePage;
  