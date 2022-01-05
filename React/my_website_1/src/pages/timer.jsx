import { useEffect } from "react";
import { useState } from "react";

function Timer () {
  const [Time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTime(Time => Time+1)
    }, 1000)
  })
  return (
    <div>
      <h1>Show time:{Time}</h1>
    </div>
  )
}

export default Timer;
