export default function Submit(props) {

    let { timeStamp } = props

    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря'
    ]

    return (
        <div className='submit'>
            <div className='submit-container'>
                <button type='submit'>Изменить</button>
                {timeStamp ? <span>Последние изменения {`${timeStamp.getDate()} ${months[timeStamp.getMonth()]} в ${dateFormat(timeStamp.getHours())}:${dateFormat(timeStamp.getMinutes())}:${dateFormat(timeStamp.getSeconds())} `}</span> : null}
            </div>
        </div>
    )

    function dateFormat(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        }
        return num;
    }
}