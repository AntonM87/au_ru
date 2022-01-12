import Validation from "../Validation/Validation";
export default function PasswordAgain(props) {

    let { passwordAgain, setPasswordAgain } = props;

    return (
        <div className='password passwordAgain'>
            <span className='passwordLabelAgain'>
                Пароль еще раз
            </span>
            {switchPassValidation(passwordAgain, setPasswordAgain)}
            <span className='passwordDescription'>Повторите пароль, пожалуйста, это обезопасит вас с нами
                на случай ошибки.</span>
        </div>
    )

    function switchPassValidation(pass, stateSetter) {
        const className = Validation.passValidate(pass) || pass === '' ? '' : 'inputValidate';
        return (
            <input autoComplete='true' className={className} onChange={(e) => {
                stateSetter(e.target.value);
            }} type='password' />
        )
    }
}