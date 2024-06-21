import { ReactNode } from "react";
import styles from './Entry.module.css'

interface EntryProps {
    /** Child components */
  /** Child components */
  title : string
  content? : string
  subContent? : EntryProps[]
}
function Entry({title, content, subContent}: EntryProps) { 
    return (
      <div className={styles.entry} id={title}>
        <h4>{title}</h4>
        {content !== undefined && 
          <p>{content}</p>
        }
        {subContent !== undefined &&
          subContent.map((entry : EntryProps) => (
            <Entry key={entry.title} title={entry.title} content={entry.content} subContent={entry.subContent}></Entry>
           ))
        }
      </div>
    );
}
  
export default Entry;