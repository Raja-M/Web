// Uncomment this line to use CSS modules
// import styles from './app.module.css';

import MainBody from "./components/mainbody/MainBody";
import MainFooter from "./components/mainfooter/MainFooter";
import MainHeader from "./components/mainheader/MainHeader";

export function App() {

  return ( 
    <>
      <MainHeader></MainHeader>
      <MainBody></MainBody>
      <MainFooter></MainFooter>
    </>
  );
}

export default App;