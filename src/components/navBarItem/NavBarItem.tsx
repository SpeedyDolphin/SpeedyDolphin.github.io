import styles from './NavBarItem.module.css'


// This component was created to prevent HomePage from being cluttered with scripts
interface NavBarItemProps {
  text : string
}

function NavBarItem({text}: NavBarItemProps) { 
  function test(){
    console.log("test")
    const element = document.getElementById(text);
    if (element !== null) element.scrollIntoView({behavior: "smooth"});
  }


  return (
    <h2 className={styles.navBarItem} onClick={test}>{"✦ "+ text}</h2>
  );
}
  
export default NavBarItem;