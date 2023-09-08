import { useState } from 'react'
import './App.css'
import NotesContainer from './pages/NotesContainer'
import './components/notes/note.css'
import { Route, Router, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Auth from './pages/Auth';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
        <Routes>

            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<NotesContainer />} />
            <Route path='/auth' element={<Auth />} />
        </Routes>

      </div>

    </>
  )
}

export default App
