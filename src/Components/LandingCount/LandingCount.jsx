import React, { useState, useEffect } from "react";
import "./LandingCount.css";

function LandingCount({ counts }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prevCont) => prevCont + 1);
    }, 1);

    if (count === counts) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [count]);
  return <h2 className="count">{count}</h2>;
}

export default LandingCount;
