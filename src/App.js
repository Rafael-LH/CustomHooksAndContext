import React from 'react';
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import { Link, Route } from "wouter"
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'

/**
 * El contexto tiene dos partes muy importantes 
 * 1: Consumidor (Para poder consumir ese objeto)
 * 2: Proveedor (Para proveer ese objeto, puedes indicar que este objeto magico donde lo podras utilizar)
 */

/**
 * El StaticContext.Provider funciona muy parecido al provider de redux
 * En caso de no pasarle ningun valor al StaticContext.Providor el valor por defecto sera el que le indicamos en StaticContext
 */

export default function App() {
  return (
    <StaticContext.Provider value={{
      name: 'Rafael',
      frontend: true,
    }}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <img className="App-logo" alt='Giffy logo' src='/logo.png' />
          </Link>
          <GifsContextProvider>
            <Route
              component={Home}
              path="/"
            />
            <Route
              component={SearchResults}
              path="/search/:keyword" />
            <Route
              component={Detail}
              path="/gif/:id"
            />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider >
  )
}
