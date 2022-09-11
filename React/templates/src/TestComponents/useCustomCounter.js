import {useState, useEffect} from 'react'

function useCustomCounter(props) {


    console.log( 'props : ' , props )
    const  count  = props
    console.log( 'count : ' , count )

    useEffect(
        () => {
            document.title = `Count ${ count}`
            return( () => {})
        },
        [count]
    )

    const [ counter, setCounter ] = useState(10)

    const increment = () => {
        setCounter( (prevCounter) =>  (prevCounter + 1 )  )
    }

    const decrement = () => {
        setCounter( (prevCounter) => (prevCounter - 1 ) )
    }

    const reset = () => {
        setCounter(0)
    }

    return [counter,  increment, decrement ]
}

export default useCustomCounter