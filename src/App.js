import React, { useState, useEffect } from 'react';
import DropDownList from './DropDownList/DropDowList'
import Card from './Card/Card';
import './App.css';

function App(props) {

  const { cities } = props
  let [editMode, selectEditMode] = useState(false);
  let [statusTooltip, setStatusTooltip] = useState('Прежде чем действовать, надо понять')

  function statusValidate(status) {
    return status.length === 0 ? 'Здесь вы можете написать ваш статус' : statusTooltip;
  }

  return (
    <div className='app'>
      {/* <Card/> */}
      {/* <DropDownList cities={cities} /> */}
      <form>
        <div className='header'>
          <p>Здравствуйте,
            <span>Человек №3596941</span>
            {editMode ? <span onClick={() => {
              selectEditMode(editMode = !editMode);
            }} >Запомнить</span> :
              <span onClick={() => {
                selectEditMode(editMode = !editMode);
              }} >Сменить статус</span>}
          </p>
        </div>
        <div className='statusTooltip'>
          {editMode ? <input onChange={(e) => {
            setStatusTooltip(statusTooltip = e.target.value);
            e.preventDefault();
          }} defaultValue={statusTooltip}></input> : <span>{statusValidate(statusTooltip)}</span>}
        </div>
      </form >
    </div >
  );
}

export default App;
