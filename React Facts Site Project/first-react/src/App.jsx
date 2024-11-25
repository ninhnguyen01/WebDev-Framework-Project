import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <>
      <header>
        <nav>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <span><h1>React Facts Site Project</h1></span>
        </nav>
      </header>

      <main>
        <h1><em>React JS - Fun facts about React!</em></h1>
        <ul className='facts-list'>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 200K stars on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    </>
  )
}

export default App