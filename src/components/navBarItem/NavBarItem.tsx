import { useEffect, useState } from 'react';
import styles from './NavBarItem.module.css'


// This component was created to prevent HomePage from being cluttered with scripts
interface NavBarItemProps {
  text : string
  canScrollSnap : boolean
  setCanScrollSnap :  React.Dispatch<React.SetStateAction<boolean>>
}

function NavBarItem({text, canScrollSnap, setCanScrollSnap}: NavBarItemProps) { 
  const [triggerJump, setTriggerJump] = useState(false);
  useEffect(() => { 
    //This is a kind of jank way to ensure that the state updates before the scroll into view is called. 
    //Edit: this is so jank, but it does indeed work
    if(canScrollSnap === false && triggerJump === true){
      console.log("Can Scroll Snap", text)
      const element = document.getElementById(text);
      if (element !== null) element.scrollIntoView({ behavior: "smooth"});
      setTimeout(()=>setCanScrollSnap(true), 1000); 
      console.log("Can Scroll Snap", canScrollSnap)
      setTriggerJump(false)
    } 
    
  }, [canScrollSnap]);

  function test(){
    setTriggerJump(true) // Need to set an individual flag because canScrollScap is shared among all instances
    setCanScrollSnap(false);
    }
  
  return (
    <h2 className={styles.navBarItem} id={"navBarItem_"+text} onClick={test}>{"✦ "+ text}</h2>
  );
}
  
export default NavBarItem;