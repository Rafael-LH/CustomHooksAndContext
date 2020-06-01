import React, { createContext, useState } from 'react'

const Context = createContext({})

// Exportandolo de forma nombrada esto quiere decir que a la hora de llamarlo lo tengo que llamar con el mismo nombre 
// del export y con { } eje { GifsContextProvider}
export function GifsContextProvider({ children }) {
  const [gifs, setGifs] = useState([])

  // return <Context.Provider value={{ gifs, setGifs }}>
  return <Context.Provider value={{ saludo: 'holi' }}>
    {children}
  </Context.Provider>
}
export default Context