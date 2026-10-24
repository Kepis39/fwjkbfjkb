import Header from './Header/header'
import Page1 from './Pages/Page1'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <>
    <BrowserRouter>
     <Header/>
     <Routes> 
        <Route path ='/' index element = {<Page1/>} />
     </Routes>
     </BrowserRouter>
    </>

  )
}


