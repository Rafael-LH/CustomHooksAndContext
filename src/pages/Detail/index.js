import React, { useContext } from 'react'
import StaticContext from '../../context/StaticContext'
import { GifsContextProvider } from '../../context/GifsContext'

/**
 * Esto biene siendo como connect de react-redux, que es donde quiero consumir mi contexto donde 
 * quiero utilizarlo
 */

export default function Detail({ params }) {
  const StaticConfig = useContext(StaticContext)
  console.log(StaticConfig);

  const GifsContext = useContext(GifsContextProvider)
  console.log(GifsContext);

  return <h1>GIT con id {params.id}</h1>
}