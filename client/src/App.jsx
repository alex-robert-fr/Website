import {useState} from 'react'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [msg, setMsg] = useState('')

  const handleClick = async () => {
    axios.get('http://localhost:3001/api/hello')
      .then(res => console.log(res.data))
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}>Say Hello</button>
        <p>{msg}</p>
      </header>
    </div>
  );
}

export default App;
