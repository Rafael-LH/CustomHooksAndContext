import { createContext } from 'react'

// este objeto es como un objeto magico ya que podemos acceder a el desde cual quier sitio
// El create context no se le pasa nada ni por parametro ni por estado todo es inyectado por medio de un hook
const Context = createContext({
  /**
   * Accederemos a esto en caso de que queramos acceder al consumidor pero no tenemos acceso a el por medio del Provider
   * Nos retornara este objeto con estos valores 
   */
  name: 'esto es sin provider',
  frontend: true,
})
export default Context

/**
 * Se puede tener mas de un context
 */