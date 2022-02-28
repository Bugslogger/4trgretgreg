import { useState } from "react";
import "./App.css";
import { Cake } from "./Comaponent/Cake";
import { Cal } from "./Comaponent/Cal";
import { Card } from "./Comaponent/Card";
// import Nav from "./Comaponent/Nav";
// import { Portrait } from "./Comaponent/portrait";
// import { Index } from './Comaponent/flying_letters/Index';
function App() {
  return (
    <div className="App d-flex jcc aic f-wrap w-100 of-y-scroll hv-100">
      {/* <div className="w-100 h-auto mtb-auto"> */}
        <Cal />
      {/* </div> */}
      {/* <div className="w-100 d-flex jcc aic card"> */}
        {/* <Card /> */}
        {/* <Card
          style={{ color: "var(--clr)" }}
          t1="everyday with you is special,"
          t2="but tudat is extra special bcoz"
          t3="it's your day, my sweetheart."
          t4="with all my love and kisses,"
          t5="just for you!"
        /> */}
        {/* <Card /> */}
      {/* </div> */}
      {/* <Index/> */}
      {/* <Portrait/> */}
      {/* <div className=" w-100">
        <Cake />
      </div> */}
      {/* <div className="w-100 hv-100 overlaydiv d-grid pic p-fixed">
      <div className="tac w-100 h-auto strip">
        Open On Lappy Bebbi
      </div>
    </div> */}
    </div>
  );
}

export default App;
