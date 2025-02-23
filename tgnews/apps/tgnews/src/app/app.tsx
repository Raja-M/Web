// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import MainBody from './components/mainbody/MainBody';
import MainFooter from './components/mainfooter/MainFooter';
import MainHeader from './components/mainheader/MainHeader';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>  <h1>TGNEWS</h1>
      
      <MainHeader></MainHeader>
      <MainBody></MainBody>
      <MainFooter></MainFooter>
      
    </>
  );
}

export default App;
