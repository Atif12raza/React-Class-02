import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './componenet/Navbar'
import { Card } from './componenet/Card'
import { Card2 } from './componenet/Card2'
import { Footer } from './componenet/Footer'

function App() {

  return (
    <>
        <Navbar />
        <Card />
        <Card2 />
        <Footer />
    </>
  )
}

export default App
