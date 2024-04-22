import React, { useRef } from "react";

const UserEntrance = ({setUserName}) => {
  const userNameRef = useRef();

  const handleClick = ()=>{
    let inputval = userNameRef.current.value;
    inputval && setUserName(inputval);
  }

  return (
    <div className="login">
      <input
      className="inputBox"
        placeholder="Enter Your Name..."
        name="username"
        ref={userNameRef}
      />
    <button className="btn" onClick={handleClick}>Start</button>
    </div>

  );
};

export default UserEntrance;
