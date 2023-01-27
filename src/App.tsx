import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-red-500">
      <header className="bg-blue-500">
        <p>
          Vite
        </p>
      </header>
    </div>
  )
}

export default App
