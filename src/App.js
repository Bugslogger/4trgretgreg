import { useEffect, useState } from "react";
import "./App.css";
import { Cal } from "./Comaponent/Cal";
import { Card } from "./Comaponent/Card";
import { PageOne } from "./Pages/PageOne";
// import Nav from "./Comaponent/Nav";
// import { Portrait } from "./Comaponent/portrait";
import { Index } from './Comaponent/flying_letters/Index';
import PageTwo from "./Pages/PageTwo";
function App() {
  const [isNavigate, setisNavigate] = useState(false);

  useEffect(() => {
    let futurTime = new Date("Sun Mar 06 2022 16:57:00 GMT+0530").getTime();
    setInterval(() => {
      if (futurTime < new Date().getTime()) {
        setisNavigate(true);
      }
    }, 1000);
  }, []);

  return (
    <div className="App d-flex jcc aic f-wrap w-100 of-y-scroll hv-100">
      {/* <div className="w-100 h-auto mtb-auto"> */}
      {isNavigate ? (
        <>
          <PageTwo/>
        </>
      ) : (
        <Cal />
      )}
      {/* </div> */}
      {/* <div className="w-100 d-flex jcc aic card"> */}
      {/* <Card /> */}

      {/* <Card /> */}
      {/* </div> */}
      {/* <Index/> */}
      {/* <Portrait/> */}

      <div className="d-none w-100 hv-100 overlaydiv ribon pic p-fixed">
        <div className="tac w-100 h-auto strip">Open On Lappy Bebbi</div>
      </div>
    </div>
  );
}

export default App;
