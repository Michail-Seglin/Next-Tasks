"use client"
import { useState } from "react";

export default function Task3() {
    const [value, setvalue] = useState('')

    function doValue(event) {
        setvalue(event.target.value)
    }

    function doCheck() {
        console.log(value);
    }

    return (
        <>
            <p>Создайте форму для ввода данных. По клику на кнопку получите данные из input
                и отобразите в консоль</p>
            <input placeholder='Введите имя' onChange={doValue}></input>
            <button onClick={doCheck}>Ввод</button>
        </>
    )
}