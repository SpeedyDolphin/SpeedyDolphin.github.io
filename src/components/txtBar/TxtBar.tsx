import { ReactNode } from "react";
import styles from './TxtBar.module.css'

interface TxtBarProps {
    /** Child components: this component is intended to be an "Entry" */
    children? : ReactNode
    className? : any
}

function TxtBar({children}: TxtBarProps) {   
  return (
    <div className={styles.txtBar}>
      {children}
    </div>
  );
}
  
export default TxtBar;