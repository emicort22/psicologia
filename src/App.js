import logo from './logo.svg';
import './App.css';
import { findByPlaceholderText } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Licenciada en Psicología
       
        
         Maria Emilia Cortegozo
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a className='sitio'>
         sitio en construcción
        </a> 
        <p >
<a  href="https://wa.me/543512130222">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png" width="50" height="50"/></a>
</p>
Consultas | turnos
      </header>
    </div>
  );
}

export default App;
