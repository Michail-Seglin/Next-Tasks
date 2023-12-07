'use client'
import Calculator from "./Calculator"

export default function Task16() {
    return (
        <>
            <p>
                6. Создайте калькулятор, который позволяет выполнять основные математические
                операции (сложение, вычитание, умножение, деление). Реализуйте два
                компонента. page.js: Содержит калькулятор. Calculator.js: Принимает введенные
                данные и выполняет математические операции для расчета итогового результата.
            </p>
            <input type="button" value={0} onClick={e => setValue(value + e.target.value)} />
            <input type="button" value={2} onClick={e => setValue(value + e.target.value)} />
            <input type="button" value={3} onClick={e => setValue(value + e.target.value)} />
            <input type="button" value={4} onClick={e => setValue(value + e.target.value)} />
            <input type="button" value={5} onClick={e => setValue(value + e.target.value)} />
            <input type="button" value={6} onClick={e => setValue(value + e.target.value)} />
            <input type="button" value={7} onClick={e => setValue(value + e.target.value)} />
            <input type="button" value={8} onClick={e => setValue(value + e.target.value)} />
            <input type="button" value={9} onClick={e => setValue(value + e.target.value)} />
            <input type="button" value={'+'} onClick={e => setValue(value + e.target.value)} />
            <input type="button" value={'*'} onClick={e => setValue(value + e.target.value)} />
            <input type="button" value={'/'} onClick={e => setValue(value + e.target.value)} />
            <input type="button" value={'-'} onClick={e => setValue(value + e.target.value)} />

            <button>Сложение</button>
            <button>вычитание</button>
            <button>Умножение</button>
            <button>Деление</button>
            <p></p>
        </>
    )
}