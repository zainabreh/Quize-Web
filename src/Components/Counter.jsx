import React, { useEffect, useState } from 'react'

const Counter = (qsNumber,setTime) => {
  const [count,setCount] = useState(3)

  useEffect(()=>{
    if(count === 0) return setTime(true);
    const interval = setInterval(()=>{
      setCount((p)=>p-1);
    },1000);

    return ()=>clearInterval(interval);
  },[setTime,count]);

  useEffect(()=>{
    setCount(3);
  },[qsNumber]);

  return count
}

export default Counter
