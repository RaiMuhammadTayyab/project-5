import React from 'react';
import './App.css';
import Header from "./Components/Header"
import IntroSec from "./Components/IntroSec"
import MidSec from "./Components/MidSec"
import LastSec from "./Components/LastSec"
import Footer from "./Components/Footer"
function App() {
  return (
    <div>
      <Header/>
      <MidSec/>
       <IntroSec/>
       
       <LastSec/>
       <Footer/>

    </div>
  );
}

export default App;
