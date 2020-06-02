import React, { createContext, useState } from 'react'
// este objeto es como un objeto magico ya que podemos acceder a el desde cual quier sitio
// El create context no se le pasa nada ni por parametro ni por estado todo es inyectado por medio de un hook
const Context = createContext({}) // Consumer

// Exportandolo de forma nombrada esto quiere decir que a la hora de llamarlo lo tengo que llamar con el mismo nombre 
// del export y con { } eje { GifsContextProvider}
export function GifsContextProvider({ children }) { //Provider
  const [gifs, setGifs] = useState([])

  // return <Context.Provider value={{ gifs, setGifs }}>
  return <Context.Provider value={{ gifs, setGifs }}>
    {children}
  </Context.Provider>
}
export default Context