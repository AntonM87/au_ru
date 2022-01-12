import Validation from "../Validation/Validation";
export default function Password(props) {

    let { setPassword, password } = props;

    return (
        <div className='password'>
            <span className='passwordLabel'>
                Пароль
            </span>
            {switchPassValidation(password, setPassword)}
            <span className='passwordDescription'>Ваш новый пароль должен содержать не менее 5 символов.</span>
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