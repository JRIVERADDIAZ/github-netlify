import React from 'react'
import { useRouteError } from 'react-router-dom'

const RouterError = () => {

    const error = useRouteError()

    return (
        <>
            <h1>
                404
            </h1>
            <p>Not Found</p>
            <p>{error.statusText || error.message}</p>
        </>
    )
}

export default RouterError