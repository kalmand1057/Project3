import React from "react";
import Forecast from "../components/Forecast/Forecast";
import Jumbotron from "../components/Jumbotron/Jumbotron"

export default function Destination() {
 return (
   <div className="App">
    <Jumbotron />
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