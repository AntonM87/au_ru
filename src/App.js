import React, { useState, useEffect, useRef } from 'react';
import DropDownList from './DropDownList/DropDowList'
import Card from './Card/Card';
import './App.css';

function App(props) {

  const { cities } = props;
  let city = 'Красноярск';
  let [editMode, selectEditMode] = useState(false);
  let [statusTooltip, setStatusTooltip] = useState('Прежде чем действовать, надо понять');
  let [password, setPassword] = useState('');
  let [passwordAgain, setPasswordAgain] = useState('');
  let [email, setEmail] = useState('');
  let [check, setCheck] = useState(false);
  let [timeStamp, setTimeStamp] = useState(0);

  const passRef = useRef();
  const passRefAgain = useRef();
  const emailRef = useRef();

  function statusValidate(status) {
    return status.length === 0 ? 'Здесь вы можете написать ваш статус' : statusTooltip;
  }

  function passValidate(pass) {
    return /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/.test(pass);
  }

  function emalValidation(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

  function switchEmailValidation() {
    const inputEmail = emailRef.current;
    if (emalValidation(email) || email.length === 0) {
      inputEmail.classList.remove('inputValidate');
      return false;
    } else {
      inputEmail.classList.add('inputValidate');
      return true;
    }
  }

  function switchPassValidation(ref, pass) {
    if (passValidate(pass) || pass.length === 0) {
      ref.classList.remove('inputValidate');
      return false;
    } else {
      ref.classList.add('inputValidate');
      return true;
    }
  }

  useEffect(() => {
    const inputPass = passRef.current;
    const inputPassAgain = passRefAgain.current;

    switchPassValidation(inputPass, password);
    switchPassValidation(inputPassAgain, passwordAgain);

    switchEmailValidation();

  });

  function onChangeCity(e) {
    city = e.target.value;
    console.log(city);
  }

  return (
    <div className='app'>
      {/* <Card/> */}
      <form>
        <div className='header'>
          <p>Здравствуйте,
            <span>Человек №3596941</span>
            {
              editMode ? <span onClick={() => { selectEditMode(editMode = !editMode) }} >Запомнить</span> :
                <span onClick={() => { selectEditMode(editMode = !editMode) }} >Сменить статус</span>
            }
          </p>
        </div>
        <div className='statusTooltip'>
          {editMode ? <input onChange={(e) => {
            setStatusTooltip(statusTooltip = e.target.value);
            e.preventDefault();
          }} defaultValue={statusTooltip} placeholder='Введите статус'></input> : <span>{statusValidate(statusTooltip)}</span>}
        </div>
        <div className='selectCity'>
          <span>
            Ваш город
          </span>
          <DropDownList onChangeCityHandler={onChangeCity} cities={cities} />
        </div>
        <div className='border'></div>
        <div className='password'>
          <span className='passwordLabel'>
            Пароль
          </span>
          <input ref={passRef} onChange={(e) => {
            setPassword(password = e.target.value);
          }} type='password' />
          <span className='passwordDescription'>Ваш новый пароль должен содержать не менее 5 символов.</span>
        </div>
        <div className='password passwordAgain'>
          <span className='passwordLabelAgain'>
            Пароль еще раз
          </span>
          <input ref={passRefAgain} onChange={(e) => {
            setPasswordAgain(passwordAgain = e.target.value);
          }} className='passwordInputAgain' type='password' />
          <span className='passwordDescription'>Повторите пароль, пожалуйста, это обезопасит вас с нами
            на случай ошибки.</span>
        </div>
        <div className='border'></div>
        <div className='email '>
          <span className='passwordLabelAgain'>
            Электронная почта
          </span>
          <input ref={emailRef} onChange={(e) => { setEmail(email = e.target.value) }} type='email' />
          <span className='passwordDescription'>Можно изменить адрес, указанный при регистрации.</span>
        </div>
        <div className='agree '>
          <span className='passwordLabelAgain'>
            Я согласен
          </span>
          <input defaultChecked={false} onChange={(e) => { setCheck(check = e.target.checked) }} className='inputAgree' type='checkbox' />
          <span className='emailDescription'>принимать актуальную информацию на емейл.</span>
        </div>
        <div className='submit'>
          <button onClick={(e) => {
            e.preventDefault();

            const passValid = passValidate(password);
            const passValidAgain = passValidate(passwordAgain);
            const emailValid = emalValidation(email);

            if (passValid && passValidAgain && password === passwordAgain && emailValid && check) {
              setTimeStamp(timeStamp = new Date());
            } else {
              alert('Проверьте заполнение всех полей')
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

          }}>Изменить</button>
          {timeStamp ? <span>Последние изменения {`${timeStamp.getDate()} ${getMonth(timeStamp.getMonth())} в ${dateFormat(timeStamp.getHours())}:${dateFormat(timeStamp.getMinutes())}:${dateFormat(timeStamp.getSeconds())} `}</span> : null}

        </div>
      </form >
    </div >
  );
}

function getMonth(num) {
  let res = '';
  switch (num) {
    case 0:
      res = 'января'
      break;
    case 1:
      res = 'февраля'
      break;
    case 2:
      res = 'марта'
      break;
    case 3:
      res = 'апреля'
      break;
    case 4:
      res = 'мая'
      break;
    case 5:
      res = 'июня'
      break;
    case 6:
      res = 'июля'
      break;
    case 7:
      res = 'августа'
      break;
    case 8:
      res = 'сентября'
      break;
    case 9:
      res = 'октября'
      break;
    case 10:
      res = 'ноября'
      break;
    case 11:
      res = 'ноября'
      break;
  }
  return res;
}
function dateFormat(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  }
  return num;
}
export default App;
