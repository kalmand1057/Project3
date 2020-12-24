import React from "react";
import Forecast from "../components/Forecast/Forecast";

export default function Destination() {
 return (
   <div className="App">
     <header className="App-header">
       <h1>Destination</h1>
     </header>
     <main>
       <Forecast />
     </main>
     <footer>
       Page created by yournamehere
     </footer>
   </div>
 );
}