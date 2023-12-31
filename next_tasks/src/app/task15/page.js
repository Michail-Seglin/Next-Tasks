'use client'

import { useState } from "react"
import AddTask from "./AddTask"
import TaskList from "./TaskList"

export default function Task15() {

    const [value, setValue] = useState('')
    const [button, setButton] = useState('')

    return (
        <>
            <p>5. Реализуйте компонент TaskList.js для отображения списка задач и AddTask.js для
                добавления новых задач. Страница page.js должна содержать оба компонента.
            </p>
            <TaskList value={value} setValue={setValue} button={button} ></TaskList>
            <AddTask setButton={setButton}></AddTask>
        </>
    )
}