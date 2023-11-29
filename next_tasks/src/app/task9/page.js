import axios from "axios";

export default async function Task9() {
    const getIp = async () => {
        const res = await axios.get('https://api.ipify.org/?format=json')

        return res.data.ip;
    }
    return (
        <>
            <p>Создайте компонент, который выполняет запрос к API
                https://api.ipify.org/?format=json и отображает полученные данные в заголовок.
                (решить задачу через серверный компонент)</p>
            <p>{await getIp()}</p>
        </>
    )
}