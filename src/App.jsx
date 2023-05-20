import Followers from './components/Followers'
import Header from './components/Header'
import Overview from './components/Overview'
import "./scss/style.scss"

function App() {

  return (
    <div className="App">
      <Header />
      <Followers />
      <Overview />
    </div>
  )
}

export default App
