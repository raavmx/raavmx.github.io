import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <p>
            О себе: Около 5 лет фуллстек на ASP.netcore +TelerikUI +(MSSQL, PostgreSQL), до этого, более 10 лет на
            WinForms + MSSQL.
          </p>
          <p>Цель: В компании возникла необходимость перенести весь фронт с ASP.netcore и Telerik.UI на реакт.</p>
          <p>
            До этого дня, опыта в реакт не было, поэтому мне нужно все, что требуется для создания современного
            приложения, на данном этапе развития этой технологии.
          </p>
        </p>
      </header>
    </div>
  );
}

export default App;
