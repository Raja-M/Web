import logo from './logo.svg';
import './App.css';
import ClassBasedcomponent from './basics/class-based-component';
import UseReducerExample from './basics/testcomponents/user-reducer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        TGNews
        <ClassBasedcomponent></ClassBasedcomponent>
        <UseReducerExample></UseReducerExample>
      </header>
    </div>
  );
}

export default App;
