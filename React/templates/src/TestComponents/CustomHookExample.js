import React, { useState , useEffect} from 'react' ;
import useCustomCounter from './useCustomCounter';


function CustomHookExample() {
  const [count, setCount] = useState(1);

  const [ counter , increment, decrement ] = useCustomCounter( 0 )

  useCustomCounter(count) 
  return (
    <div>
        <button onClick={ () =>  setCount(prevCount => prevCount + 1 )}>Count : {count}</button>
        <div>Counter : {counter} </div>
        <button onClick={increment}>Counter : {counter}</button>
    </div>    
  )
}

export default CustomHookExample