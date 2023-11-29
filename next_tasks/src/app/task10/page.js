'use client'
import { useState, useMemo } from "react"

export default function Task10() {
    const [number, setNumber] = useState();
    const [value, setValue] = useState();

    function factorial(n) {
        return n ? n * factorial(n - 1) : 1;
    }

    useMemo(() => {
        setValue(factorial(number));

    }, [number]);

    console.log(number);

    return (
        <>
            <p>Создайте компонент, в котором пользователь может ввести число. Используйте
                useMemo, чтобы вычислить факториал введенного числа. Выведите результат
                факториала на странице.</p>
            <input onChange={(e) => setNumber(e.target.value)}></input>            <p>{number}</p>
            <p>{number}</p>
        </>
    )
}