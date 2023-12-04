'use client'

import { useState, useEffect } from "react"

export default function TaskList({ button }) {
    const [arrValues, setArrvalues] = useState(['qwe', 'qwqe', 'ad']);

    useEffect(() => {
        setArrvalues([...arrValues, button])
    }, [button]
    )

    return (
        <>
            <div>
                {arrValues.map((el, index) => <p>{el}</p>)}
            </div>
        </>
    )
}