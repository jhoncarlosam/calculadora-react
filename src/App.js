import './App.css';
import Button from './components/Button';
import freeCodeCampLogo from './imgs/freecodecamp-logo.jpg'

function App() {
  return (
    <div className='App'>
     <div className='freecodecamp-contenedor'>
      <img
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo de freecodecamp' />
     </div>
     <div className='contenedor-calculadora'>
      <div className='fila'>
        <Button>1</Button>
        <Button>+</Button>
      </div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>
     </div>
    </div>
  );
}

export default App;
