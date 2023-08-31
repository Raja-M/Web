import React from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'

function UserList() {
    const users = useSelector( (state) => state )
    console.log(" users List " + users.length)
    return (
        <> {users[0].id} </>
    )
}

export default UserList
