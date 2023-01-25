import { useState } from 'react'
import Header from './assets/component/Header/Header'
import Footer from './assets/component/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  )
}

export default App
