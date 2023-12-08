export default function Calculator() {

    function sum() {
        <input type="button" value={'+'} onClick={e => setValue(value + e.target.value)} />

    }

    function subtraction() {
        <input type="button" value={'-'} onClick={e => setValue(value + e.target.value)} />

    }

    function multiplication() {            <input type="button" value={'*'} onClick={e => setValue(value + e.target.value)} />
}

    function division() {             <input type="button" value={'/'} onClick={e => setValue(value + e.target.value)} />
}

    return (
        <>

        </>
    )
}