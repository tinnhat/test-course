import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Greet } from './components/greet/greet'
import { Application } from './components/application/application'
import { Counter } from './components/counter/counter'
import { AppProvider } from './components/providers/app-provider'
import { MuiMode } from './components/mui/mui-mode'

function App() {
  return (
    <AppProvider>
      <div className='App'>
        <MuiMode/>
      </div>
    </AppProvider>
  )
}

export default App
