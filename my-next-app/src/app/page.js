"use client"
import { useState } from "react";

export default function Home() {
  const [count,setCount] = useState(0)
  const clickMeBtn = () =>setCount(count+1)

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={clickMeBtn}>ClickMe!!!</button>
        
    </div>
  )
}
