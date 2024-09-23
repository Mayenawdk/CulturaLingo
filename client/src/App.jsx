import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';

// i believe we need to import the header here 

import './App.css'
import ProfileBlock from './components/profile-block/ProfileBlock'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './header';
import HomePage from './homePage';

function App() {
  return (
    <>
      <Header />
      <HomePage />  {/* This will include the new 3-column layout */}
      <ProfileBlock />  {/* Retained your ProfileBlock component here */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
