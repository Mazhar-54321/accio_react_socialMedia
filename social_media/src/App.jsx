import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Item from './components/Item'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router basename="/accio_react_socialMedia">
       <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
