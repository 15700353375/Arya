import logo from './img/logo.jpg';
import './App.css';
import {
  Wshoot
} from '@alicloud/cloud-charts';
const point = [
  { x: 100, y: 100 },
  { x: 400, y: 100 },
  { x: 200, y: 300 },
  { x: 500, y: 300 }
];
function App() {
  return (
    <div className="App">
      <div className='main-logo'>
        <img src={logo} className="logo" alt="logo" />
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
