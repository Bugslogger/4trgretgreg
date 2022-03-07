import React, { useEffect, useState } from "react";
import Nav from "./Nav";

export const Cal = () => {
  const [state, setstate] = useState({
    hours: "--",
    mint: "--",
    sec: "--",
  });
const [isNavigate, setisNavigate] = useState(false);


  let futurTime = new Date("Sun Mar 06 2022 16:12:00 GMT+0530").getTime();
  useEffect(() => {
    setInterval(() => {
      // if (futurTime < new Date().getTime()) {
      //   setstate({
      //     hours: "--",
      //     mint: "--",
      //     sec: "--",
      //   });
      //   clearInterval();
      // } else {
        setstate({
          hours: new Date().getHours(),
          mint:
            new Date().getMinutes() < 10
              ? "0" + new Date().getMinutes()
              : new Date().getMinutes(),
          sec:
            new Date().getSeconds() < 10
              ? "0" + new Date().getSeconds()
              : new Date().getSeconds(),
        });
      // }
    }, 1000);

    console.log(new Date());
  }, []);

  return (
    <div className="w-100 df-jcc-aic f-wrap h-auto">
      <Nav name="Crysty" />
      <div className=" df-jcc-aic cal-box-container">
        <div className="hours">{state.hours}</div>
        <span>:</span>
        <div className="minutes">{state.mint}</div>
        <span>:</span>
        <div className="seconds">{state.sec}</div>
      </div>
    </div>
  );
};
