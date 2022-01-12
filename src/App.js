import React, { useState, useEffect, useRef } from 'react';
import DropDownList from './DropDownList/DropDowList'
import Card from './Card/Card';
import './App.css';

let city = 'Красноярск';

function App(props) {

  const { cities } = props;
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
  let [editMode, selectEditMode] = useState(false);
  let [statusTooltip, setStatusTooltip] = useState('Прежде чем действовать, надо понять');
  let [password, setPassword] = useState('');
  let [passwordAgain, setPasswordAgain] = useState('');
  let [email, setEmail] = useState('');
  let [check, setCheck] = useState(false);
  let [timeStamp, setTimeStamp] = useState(0);

  function statusValidate(status) {
    return status.length === 0 ? 'Здесь вы можете написать ваш статус' : statusTooltip;
  }

  function passValidate(pass) {
    return /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/.test(pass);
  }

  function emalValidation(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

  function switchEmailValidation(email, stateSetter) {
    const className = emalValidation(email) || email === '' ? '' : 'inputValidate';
    return (
      <input className={className} onChange={(e) => { stateSetter(e.target.value) }} type='email' />
    )
  }

  function switchPassValidation(pass, stateSetter) {
    const className = passValidate(pass) || pass === '' ? '' : 'inputValidate';
    return (
      <input autoComplete='true' className={className} onChange={(e) => {
        stateSetter(e.target.value);
      }} type='password' />
    )
  }

  function onChangeCity(e) {
    city = e.target.value;
  }

  function getResult(e) {

    const passValid = passValidate(password);
    const passValidAgain = passValidate(passwordAgain);
    const emailValid = emalValidation(email);

    if (passValid && passValidAgain && password === passwordAgain && emailValid && check) {
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
            setStatusTooltip(e.target.value);
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
          {switchPassValidation(password, setPassword)}
          <span className='passwordDescription'>Ваш новый пароль должен содержать не менее 5 символов.</span>
        </div>
        <div className='password passwordAgain'>
          <span className='passwordLabelAgain'>
            Пароль еще раз
          </span>
          {switchPassValidation(passwordAgain, setPasswordAgain)}
          <span className='passwordDescription'>Повторите пароль, пожалуйста, это обезопасит вас с нами
            на случай ошибки.</span>
        </div>
        <div className='border'></div>
        <div className='email '>
          <span className='passwordLabelAgain'>
            Электронная почта
          </span>
          {switchEmailValidation(email, setEmail)}
          <span className='passwordDescription'>Можно изменить адрес, указанный при регистрации.</span>
        </div>
        <div className='agree '>
          <span className='passwordLabelAgain'>
            Я согласен
          </span>
          <input defaultChecked={false} onChange={(e) => { setCheck(e.target.checked) }} className='inputAgree' type='checkbox' />
          <span className='emailDescription'>принимать актуальную информацию на емейл.</span>
        </div>
        <div className='submit'>
          <div className='submit-container'>
            <button type='submit'>Изменить</button>
            {timeStamp ? <span>Последние изменения {`${timeStamp.getDate()} ${months[timeStamp.getMonth()]} в ${dateFormat(timeStamp.getHours())}:${dateFormat(timeStamp.getMinutes())}:${dateFormat(timeStamp.getSeconds())} `}</span> : null}
          </div>
        </div>
      </form >
    </div >
  );
}

function dateFormat(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  }
  return num;
}
export default App;
