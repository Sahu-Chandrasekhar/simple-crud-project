import './App.css';
import React, { useState } from 'react';
import Signoutstack from './pages/signoutstack';
import Signinstack from './pages/signinstack';

function App() {

  const [email, setEmail] = useState(localStorage.getItem("useremail"));
  const [password, setPassword] = useState(localStorage.getItem("userpassword"));


  return (
    <div>
      {
        email === "user@gmail.com" && password === "12345" ? <Signinstack /> : <Signoutstack />
      }
    </div>
  );
}

export default App;
