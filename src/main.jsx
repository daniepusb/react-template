import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './Clase2.jsx'
import Counter from "./components/Counter_clase3.jsx";
import ToggleButton from "./components/ToggleButton_clase_5.jsx";
import NameForm from "./components/NameForm_class6.jsx";
import CounterWithEffect from "./components/Counter_clase7.jsx";
import Card from "./components/cards/Card.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card />
    <CounterWithEffect  />
    <NameForm  />
    <ToggleButton  />
    <Counter  />
  </StrictMode>,
)
