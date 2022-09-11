//exports logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux'
import store from  './Redux/store'

import Title from './Title';
import Clock from './Clock';
import Body from './Body/Body';
import MainForm from './Body/Forms/MainForm';

import RdxAppContainer from './RdxAppContainer';
import TestClass from './TestComponents/TestClass';
import TestFunction from './TestComponents/TestFunction';
import { FormExample } from './TestComponents/FormExample';
import ErrorThrow from './TestComponents/ErrorThrow';
import ErrorBoundary from './TestComponents/ErrorBoundary';
import HighOrderEXClickCount from './TestComponents/HighOrderEXClickCount';
import UseEffectMouseMove from './TestComponents/UseEffectMouseMove';
import FirstCounter from './TestComponents/UseReducer';
import CounterClass from './TestComponents/CounterClass';
import CustomHookExample from './TestComponents/CustomHookExample';

 
//const ReduxContainer = require('./Redux/ReduxContainer');

function App() {
  return (
    <>
      <CustomHookExample></CustomHookExample>
      <CounterClass></CounterClass>
      <FirstCounter></FirstCounter>
      <TestClass></TestClass>
      <TestFunction name="Raja" heroName="Lead"></TestFunction>
      <FormExample></FormExample>
      <ErrorBoundary>
      < ErrorThrow heroname='SuperMan'></ErrorThrow>
      </ErrorBoundary>
      <ErrorBoundary>
      < ErrorThrow heroname='BatMan'></ErrorThrow>
      </ErrorBoundary>
      <ErrorBoundary>
      < ErrorThrow heroname='joker'></ErrorThrow>
      </ErrorBoundary>
      <HighOrderEXClickCount></HighOrderEXClickCount>
      <UseEffectMouseMove></UseEffectMouseMove>
    </>
  );
    
    /*
    <Provider store={store} >
    <div className="App" >
    
    <Title text="Welcome" style={{ display : 'grid' , alignItems : 'center'   }}> here </Title>
    <Clock style={{  display : 'grid' }}></Clock>
 
    <Body> </Body> 

            <RdxAppContainer></RdxAppContainer> 
     </div>
    

     </Provider>
     */
       
  
}


export default App;
