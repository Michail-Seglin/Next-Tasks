'use client'
import { useState } from "react"
export default function Task14() {

    const [value, setValue] = useState('')

    function show() {

        setValue('Показать')
    }

    function rep() {
        setValue('')
    }

    return (
        <>
            <p>4. Напишите код для отображения всплывающего окна с сообщением при
                наведении на определенный элемент на странице. (onMouseEnter onMouseLeave)
            </p>
            <button onMouseEnter={show} onMouseLeave={rep}>Click me</button>
            <h1>{value}</h1>

        </>
    )
}