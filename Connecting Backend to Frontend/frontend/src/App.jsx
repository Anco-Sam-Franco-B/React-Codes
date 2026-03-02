 import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserForm from './Pages/UserForm'
import ViewUsers from './Pages/ViewUsers'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <div className="">
          <Routes>
          <Route path='/' element={<UserForm/>} />
          <Route path='/users' element={<ViewUsers/>} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
