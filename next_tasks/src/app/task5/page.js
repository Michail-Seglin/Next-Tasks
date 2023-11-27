'use client'

export default function Task5() {

    const arr = ["New York", "London", "Tokyo", "Paris", "Berlin"]

    function show(event) {
        console.log(event.target.textContent);
    }

    return (
        <>
            <p>Создайте массив данных, представляющий элементы, которые вы хотите
                отобразить в списке используя map. ["New York", "London", "Tokyo", "Paris", "Berlin"]
                Добавить событие клика с распознаванием на какой именно li был совершен клик
            </p>
            <ul>
                {arr.map((el, index) => (<li key={index} onClick={show}>{el}</li>))}
            </ul>

        </>
    )
}
