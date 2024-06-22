import {InView } from "react-intersection-observer";
import styles from './Entry.module.css'

interface EntryProps {
    /** Child components */
  /** Child components */
  title : string
  content? : string
  subContent? : EntryProps[]
}
function Entry({title, content, subContent}: EntryProps) { 
  var willScroll : boolean= true
  function callback(inView:boolean)
  {
    if(!inView){
      willScroll = true;
      //Change color of navBar title 
      const element = document.getElementById("navBarItem_"+title);
      if (element !== null) element.style.color = "#FFFFFF";
    }
    else{
      if (willScroll == true){
        const element = document.getElementById(title);
        if (element !== null) element.scrollIntoView({behavior: "smooth"});
      }
      willScroll = false
      //Change color of navBar title
      const element = document.getElementById("navBarItem_"+title);
      if (element !== null) element.style.color = "#DA7635";
    }

  }

  return (
    <div className={styles.entry} id={title}>
      <InView threshold={[.1]} delay={300} onChange={(inView, entry) => callback(inView)}>
        <h4>{title}</h4>
        {content !== undefined && 
          <p>{content}</p>
        }
        {subContent !== undefined &&
          subContent.map((entry : EntryProps) => (
            <div className={styles.nestedEntry}>
              <h5>{entry.title}</h5>
              {entry.content !== undefined && <p>{entry.content}</p>}
            </div>
            ))
        }
      </InView>
    </div>
  );
}
  
export default Entry;