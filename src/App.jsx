import './App.css'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
      <Outlet></Outlet>
    </>
  )
}

export default App
