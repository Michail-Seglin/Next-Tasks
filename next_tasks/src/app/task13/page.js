'use client'

import { useState } from "react"
export default function Task13() {

    const arr = ['Миша', 'Коля', 'Оля', 'Саша']
    const [value, setValue] = useState('');


    function random() {
        let item = arr[Math.floor(Math.random() * arr.length)]
        setValue(item);
    }


    return (
        <>
            <p>
                Напишите скрипт, который при нажатии на кнопку будет выводить случайное
                сообщение из заранее заданного списка
            </p>

            <button onClick={random}>click</button>
            <p>{value}</p>
        </>
    )
}