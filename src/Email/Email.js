import Validation from "../Validation/Validation";
export default function Email(props) {

    let { email, setEmail } = props;

    return (
        <div className='email '>
            <span className='passwordLabelAgain'>
                Электронная почта
            </span>
            {switchEmailValidation(email, setEmail)}
            <span className='passwordDescription'>Можно изменить адрес, указанный при регистрации.</span>
        </div>
    )

    function switchEmailValidation(email, stateSetter) {
        const className = Validation.emalValidation(email) || email === '' ? '' : 'inputValidate';
        return (
            <input className={className} onChange={(e) => { stateSetter(e.target.value) }} type='email' />
        )
    }
}