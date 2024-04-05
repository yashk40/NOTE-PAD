import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import './index.css';
// import React, { usestate } from 'react';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  

  const [mode, setMode] = useState('secondary');

  const btn = () => {
    if (mode === 'secondary') {
      setMode('dark');
      document.body.style.backgroundColor = '#070c14';
      document.body.style.color = 'white';
      document.querySelector('textarea').style.backgroundColor = '#F0ECE5';
 }else{
     setMode('secondary');
     document.querySelector('textarea').style.backgroundColor = 'white';
     document.body.style.backgroundColor = '#FFF7F1';
     document.body.style.color = 'black'; }
}   
  return (
  <> 
<Navbar title="Notepad"  about="About us" mode={mode} btn={btn} />
<Alert alert={alert}/>
<div className="container">
<TextForm  showAlert={showAlert}  btn={btn}  textarea = " " mx-7   my-6  /> 
{/* <About/> */}
</div>
  </>
  );
} 
export default App;
