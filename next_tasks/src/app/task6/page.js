import style from './style.module.css'
import { useState } from 'react'

export default function Task6() {
    const [bool, setBool] = useState(true);

    return (

        <>
            <p> Создайте кнопку, которая позволяет пользователю переключаться между светлой
                и темной темой интерфейса. Используйте useState, чтобы отслеживать текущую
                тему. Применяйте соответствующие стили в зависимости от выбранной темы.</p>


        </>
    )
}