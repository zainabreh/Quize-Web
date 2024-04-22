import React, { useEffect, useState } from 'react'

const Counter = ({setTime,qsNumber}) => {
  const [count,setCount] = useState(30)

  useEffect(()=>{
    if(count === 0) return setTime(true);
    const interval = setInterval(()=>{
      setCount((p)=>p-1);
    },1000);

    return ()=>clearInterval(interval);
  },[setTime,count]);

  useEffect(()=>{
    setCount(30);
  },[qsNumber]);

  return count
}

export default Counter
