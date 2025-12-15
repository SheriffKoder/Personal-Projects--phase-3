
"use client"

import { useEffect, useState } from "react";

export default function CheckSessionStorage () {

    const [visited, setVisited] = useState<string|null>("");
    
    useEffect(()=> {
  
      let isvisited = sessionStorage.visited;
      setVisited(isvisited);
    //   console.log(visited)
  
  
  
    },[visited]);
  
    if (visited === "true") {
      return true;
    } else {
      return false;
    }

}
  