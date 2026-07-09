import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddBook from './Components/AddBook'
import SearchBook from './Components/SearchBook'
import DeleteBook from './Components/DeleteBook'
import ViewBook from './Components/ViewBook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddBook />} />
          <Route path="/search" element={<SearchBook />} />
          <Route path="/delete" element={<DeleteBook />} />
          <Route path="/view" element={<ViewBook />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
