import { ReactNode } from "react";
import "./Entry.css"

interface EntryProps {
    /** Child components */
  /** Child components */
  title : string
  content? : string
  subContent? : EntryProps[]
}
function Entry({title, content, subContent}: EntryProps) {  
  console.log("I've been called!") 
  console.log("Title")
  console.log(title)
  console.log("Content ")
  console.log(content)
  console.log("subContent ")
  console.log(subContent)
    return (
      <>
        <h4>{title}</h4>
        {content !== undefined && <p>{content}</p>}
      </>
    );
}
  
export default Entry;