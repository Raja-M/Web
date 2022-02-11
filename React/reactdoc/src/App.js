//import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux'
import store from  './Redux/store'

import Title from './Title';
import Clock from './Clock';
import Body from './Body';
import MainForm from './Forms/MainForm';

import RdxAppContainer from './RdxAppContainer';

//const ReduxContainer = require('./Redux/ReduxContainer');

function App() {
  return (
    <>
    <Provider store={store} >
    <div className="App" >
    
    <Title text="Welcome" style={{ display : 'grid' , alignItems : 'center'   }}> here </Title>
    <Clock style={{  display : 'grid' }}></Clock>
    <Body> </Body> 

            <RdxAppContainer></RdxAppContainer> 
     </div>
   
    <MainForm></MainForm>
     </Provider>
    </>
    
  );
}


export default App;
