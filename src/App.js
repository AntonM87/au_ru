import React, { useState } from 'react';
import Password from './Password/Password';
import PasswordAgain from './PasswordAgain/PasswordAgain';
import StatusTooltip from './StatusTooltip/StatusTooltip';
import SelectCity from './SelectCity/SelectCity';
import Email from './Email/Email';
import Agree from './Agree/Agree';
import Submit from './Submit/Submit';
import Validation from './Validation/Validation';
import './App.css';

let city = 'Красноярск';

function App(props) {

  const { cities } = props;
  let [editMode, selectEditMode] = useState(false);
  let [statusTooltip, setStatusTooltip] = useState('Прежде чем действовать, надо понять');
  let [password, setPassword] = useState('');
  let [passwordAgain, setPasswordAgain] = useState('');
  let [email, setEmail] = useState('');
  let [check, setCheck] = useState(false);
  let [timeStamp, setTimeStamp] = useState(0);

  function onChangeCity(e) {
    city = e.target.value;
  }

  function getResult(e) {

    const passValid = Validation.passValidate(password);
    const passValidAgain = Validation.passValidate(passwordAgain);
    const emailValid = Validation.emalValidation(email);

    const inputsValid = passValid && passValidAgain && password === passwordAgain && emailValid && check

    if (inputsValid) {
      setTimeStamp(timeStamp = new Date());

    } else {
      alert('Проверьте заполнение всех полей')
      return;
    }

    const json = JSON.stringify({
      city,
      statusTooltip,
      password,
      passwordAgain,
      email,
      check,
      timeStamp
    })

    console.log(json);

    e.preventDefault();
  }

  return (
    <div className='app'>
      <form action='#' onSubmit={(e) => getResult(e)}>
        <StatusTooltip
          editMode={editMode}
          selectEditMode={selectEditMode}
          statusTooltip={statusTooltip}
          setStatusTooltip={setStatusTooltip}
        />
        <SelectCity
          onChangeCity={onChangeCity}
          cities={cities}
        />
        <div className='border'></div>
        <Password
          password={password}
          setPassword={setPassword}
        />
        <PasswordAgain
          passwordAgain={passwordAgain}
          setPasswordAgain={setPasswordAgain}
        />
        <div className='border'></div>
        <Email
          email={email}
          setEmail={setEmail}
        />
        <Agree setCheck={setCheck} />
        <Submit timeStamp={timeStamp} />
      </form >
    </div >
  );
}

export default App;
