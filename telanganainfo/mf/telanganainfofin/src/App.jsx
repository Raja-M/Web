
import React, { Suspense, useState, StrictMode} from "react";
import ReactDOM from "react-dom";

import "./index.css";

//const Header  = React.lazy ( () => import( "telanganainfo/Header" ));

import Header from "telanganainfo/Header";
import Footer from "telanganainfo/Footer";
import SafeComponent from "./SafeComponent";
import { createRoot }from 'react-dom/client';


const App = () => {
  const [showHeader, setShowHeader] = useState(false);
return(
  <div className="container">
    <StrictMode>
      <SafeComponent>
        <Header  > </Header>
       </SafeComponent>
    </StrictMode>
    <div style={{  padding:"25px"}}> 
      TelanganainfoFin Page Content
    </div>
    <Footer></Footer>
  </div>
);
}

const container = document.getElementById( 'app');
const root = createRoot(container);
root.render( <App />);


/*
import React, { Suspense, useState} from "react";
import ReactDOM from "react-dom";

import "./index.css";

const Header  = React.lazy ( () => import( "telanganainfo/Header" ));

import Footer from "telanganainfo/Footer";
import SafeComponent from "./SafeComponent";

const App = () => {
  const [showHeader, setShowHeader] = useState(false);
return(
  <div className="container">
    { showHeader && <Suspense fallback={<div>Loading...</div>}>
      <SafeComponent>
        <Header> </Header>
      </SafeComponent>
      
    </Suspense>}
    <button onClick={() => setShowHeader(true)}> Show Header </button>
    <div style={{  padding:"25px"}}> 
      TelanganainfoFin Page Content
    </div>
    <Footer></Footer>
  </div>
);
}
ReactDOM.render(<App />, document.getElementById("app"));
*/