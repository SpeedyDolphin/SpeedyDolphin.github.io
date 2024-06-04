import { ReactNode } from "react";
import "./Entry.css"

interface EntryProps {
    /** Child components */
    title : string
    content : string
    children : ReactNode
}

function Entry({title, content, children}: EntryProps) {   
  return (
    <div className="overflowHider">
      <div className="centerBox">
          
      </div>
    </div>
  );
}
  
export default Entry;