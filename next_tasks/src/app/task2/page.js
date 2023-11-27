"use client"
import { useState } from 'react'
import style from './style.module.css'


export default function Task2() {
    const [obj, setObj] = useState({});

    function fillInput() {
        setObj({ ...obj, [event.target.name]: event.target.value })
    }

    function doCheck() {
        if (!/^[a-zA-Z-_0-9]+@[a-z]+.[a-z]{2,10}/gm.test(obj.mail) || isNaN(obj.name) || isNaN(obj.surname)) {
            alert(false)
        }
        alert(true)
    }
    return (
        <>
            <p>Создайте форму для ввода имени, фамилии, адреса электронной почты и пароля.
                По клику на кнопку проверить вводимые данные на регулярные выражения. В
                случае успешной валидации – alert(true)
            </p>
            <div className={style.form}>
                <input placeholder='Введите имя' name='name' onChange={fillInput}></input>
                <input placeholder='Введите фамилию' name='surname' onChange={fillInput}></input>
                <input placeholder='Введите почту' name='mail' onChange={fillInput}></input>
                <input placeholder='Введите пароль' name='pwd' onChange={fillInput}></input>
                <button className={style.btn} onClick={doCheck}> Сохранить</button>
            </div>

        </>
    )
}