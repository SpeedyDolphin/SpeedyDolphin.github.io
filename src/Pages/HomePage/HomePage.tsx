import styles from './HomePage.module.css'
import {Link} from "react-router-dom";
import ImageButton from '../../components/imageButton/imageButton';
import rawData from './data.json';
import Entry from '../../components/entries/Entry';
import TxtBar from '../../components/txtBar/TxtBar';
import NavBarItem from '../../components/navBarItem/NavBarItem';

interface txtBarData {
  /** Child components */
  title : string
  content? : string
  subContent? : txtBarData[]
}

const data : txtBarData[] = rawData

function HomePage() {
  return (
    <div className={styles.HomePage}>
      <div className={styles.homePageContainer}>
        <img src="./images/backgroundTemp.jpg" alt='' className={styles.backgroundImage}></img>

        <div className={styles.left}>
          <div className={styles.navBar}>
            {/* Populate the titles */}
            {data.map((entry : txtBarData) => (
              <NavBarItem text={entry.title}></NavBarItem>
            ))}
          </div>
          <div className={styles.titleText}>
            <h1>Athena Rubio</h1>
            <h5>Software Dev ✦ Artist</h5>

            <div className={styles.linkButtons}>
              <ImageButton src='./images/LinkedInIcon.png' alt='LinkedIn Icon' link='https://www.linkedin.com/in/athenarubio/'/>
              <ImageButton src='./images/GithubIcon.png' alt='Github Icon' link='https://github.com/SpeedyDolphin'/>
            </div>

          </div>

         
        </div>

        <TxtBar className={styles.right}>
           {/* Populate my life */}
           {data.map((entry : txtBarData) => (
            <Entry key={entry.title} title={entry.title} content={entry.content} subContent={entry.subContent}></Entry>
           ))}

        </TxtBar>

      </div>
    </div>
    );
  }
  
  export default HomePage;
  