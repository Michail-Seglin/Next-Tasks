import style from './style.module.css'
export default function Task1() {
    return (
        <>
            <p>Создайте форму для ввода имени, фамилии, адреса электронной почты и пароля.
            </p>
            <div className={style.form}>
                <input placeholder='Введите имя'></input>
                <input placeholder='Введите фамилию'></input>
                <input placeholder='Введите почту'></input>
                <input placeholder='Введите пароль'></input>
                <button className={style.btn}> Сохранить</button>
            </div>
        </>
    )
}