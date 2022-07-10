import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Header />

      <main className='main'>
        <Home />
      </main>

      <Footer />
    </div>
  )
}

export default App
