'use client'

export default function AddTask({ value, setValue, setButton }) {


    function show() {
        console.log(value);
        setButton(value)
    }

    function fillInput(event) {
        setValue(event.target.value)
    }

    return (
        <>
            <input onChange={fillInput}></input>
            <button onClick={show}>Нажми</button>
        </>
    )
}