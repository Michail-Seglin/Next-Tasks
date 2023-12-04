'use client'
import Input from "./Input"
export default function Client() {
    function show() {
        alert('HI')
    }

    return (
        <>

            <Input></Input>
            <button onClick={show}>Нажми</button>
        </>
    )
}