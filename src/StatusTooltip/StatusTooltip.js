export default function StatusTooltip(props) {
    let {
        editMode, selectEditMode,
        statusTooltip, setStatusTooltip
    } = props;

    function statusValidate(status) {
        return status.length === 0 ? 'Здесь вы можете написать ваш статус' : statusTooltip;
    }

    return (
        <>
            <div className='header'>
                <p>Здравствуйте,
                    <span>Человек №3596941</span>
                    {editMode ? <span onClick={() => { selectEditMode(editMode = !editMode) }} >Запомнить</span> :
                        <span onClick={() => { selectEditMode(editMode = !editMode) }} >Сменить статус</span>}
                </p>
            </div>
            <div className='statusTooltip'>
                {editMode ? <input onChange={(e) => {
                    setStatusTooltip(e.target.value);
                    e.preventDefault();
                }} defaultValue={statusTooltip} placeholder='Введите статус'></input> : <span>{statusValidate(statusTooltip)}</span>}
            </div>
        </>
    )
}

