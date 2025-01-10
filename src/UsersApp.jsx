// import React, { useEffect, useState } from 'react'
import { useState } from 'react'
import { UserList } from './components/userList'
// import { useState } from 'react'
// import { useEffect } from 'react'

export const UsersApp = () => {

    const [endPoint, setEndPoint] = useState('users')

    /*
    useEffect ( () => {
        fetchUsers()
    }, [])
    */

    const handleFetch = () => {
        setEndPoint('comments')
    }

    return (
        <>
            <h1>Lista de usuarios: </h1>
            <UserList endPoint = {endPoint}></UserList>
            <button onClick={handleFetch}>Aquí se llama a la API</button>
        </>
    )
}
