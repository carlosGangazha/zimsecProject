import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeComponent from './components/Home'
import LoginPage from './components/Login'
import SignupPage from './components/Signup'
import UploadPage from './components/UploadPage';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeComponent/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/upload' element={<UploadPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
