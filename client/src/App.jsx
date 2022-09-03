import './App.css'
import {Routes,Route} from 'react-router-dom'
import {Login} from './pages/Login'

function App() {

  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='*' element={<>Error 404</>}/>
      </Routes>
    </div>
  )
}

export default App
