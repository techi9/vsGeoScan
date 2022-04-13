
import './App.css';






// import * as THREE from 'three';
//
// import { OrbitControls } from './jsm/controls/OrbitControls.js';

function App() {





  let socket
  let connect = (e) =>{
    socket = new WebSocket("ws://127.0.0.1:3111");
    socket.onopen = function(e) {
      alert("[open] Соединение установлено");
    };
    socket.onmessage = function(event) {
      console.log(`[message] Данные получены с сервера: ${event.data}`);
    };
  }


  return (
    <div className="App">
    <button onClick={connect}></button>
    </div>
  );
}

export default App;
