import React, { useState } from "react";
import logo from './login_logo.svg';
import './loginApp.css';
import { Login } from "./Login";
import { Register } from "./Register";

import '/Users/anoushkamakkad/201-project/group-code/roomiez_frontend/my-react-app/src/pages/loginApp.css';

export function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }


  return (
    <div className="App">
      {
        currentForm == "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
