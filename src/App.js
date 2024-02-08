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

      
        Consultas | turnos

<a className='button' href="https://wa.me/543512130222">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png" width="60" height="60"/></a>

        <div className='sitio'>
          

        <img src={logo} className="App-logo" alt="logo" />
         sitio en construcción
        </div> 
      
      </header>
    </div>
  );
}

export default App;
