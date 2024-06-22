import { ReactNode } from "react";
import React, { useState } from "react";
import { useInView, InView } from "react-intersection-observer";
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
      const element = document.getElementById("navBarItem_"+title);
      if (element !== null) element.style.color = "#FFFFFF";
    }
    else{
      const element = document.getElementById("navBarItem_"+title);
      if (element !== null) element.style.color = "#DA7635";
    }

  }

  return (
    <div className={styles.entry} id={title}>
      <InView threshold={[0,.6]} onChange={(inView, entry) => callback(inView)}>
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