export default function Agree(props) {

    const { setCheck } = props;

    return (
        <div className='agree '>
            <span className='passwordLabelAgain'>
                Я согласен
            </span>
            <input defaultChecked={false} onChange={(e) => { setCheck(e.target.checked) }} className='inputAgree' type='checkbox' />
            <span className='emailDescription'>принимать актуальную информацию на емейл.</span>
        </div>
    )
}