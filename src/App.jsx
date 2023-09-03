import { useState } from 'react'
import fathymLogo from '/thinky.svg'
import tailwindLogo from '/tailwind.svg'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={fathymLogo} className="logo" alt="Fathym logo" />
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Blog
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Docs
            </a>
          </div>
        </div>
      </nav>
      <div>
      <div class="mx-auto max-w-md">
        <div class="flex h-40 max-w-md items-center justify-center">
          <div class="h-40 w-40">
            <a href="https://fathym.com" target="_blank">
              <img src={fathymLogo} className="logo" alt="Fathym logo" />
            </a>
          </div>
          <div class="h-40 w-40">
            <a href="https://tailwindcss.com" target="_blank">
              <img src={tailwindLogo} className="logo" alt="Tailwind logo" />
            </a>
          </div>
          <div class="h-40 w-40">
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
          </div>
          <div class="h-40 w-40">
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
        </div>
      </div>

      </div>
      <h2>Fathym + Tailwind + Vite + React</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the logos to learn more.
      </p>
    </>
  )
}

export default App
