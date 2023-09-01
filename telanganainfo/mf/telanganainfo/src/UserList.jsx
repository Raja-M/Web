import React from 'react'
import {  useSelector , useDispatch } from 'react-redux'
import { userAdded } from './Redux/Actions';

function UserList() {
    const users = useSelector( (state) => state )
    const dispatch = useDispatch();
    console.log(" users List " + users.length)

    const increment = () => {
        console.log( "increment ");
        dispatch(userAdded() );
    }
    const decrement = () => {
        
    }

    return (
        <>  <p> {users[0].id}  </p>
          
            <button onClick={increment}>
                Increment
            </button>
            <button onClick={decrement}>
                Decrement
            </button>           
 
        </>


    )
}

export default UserList
