import React from 'react'
import Gif from '../../components/Gif'
import useGlobalGifs from '../../hooks/useGlobalGifs'

/**
 * Esto biene siendo como connect de react-redux, que es donde quiero consumir mi contexto donde 
 * quiero utilizarlo
 */
export default function Detail({ params }) {
  const gifs = useGlobalGifs()
  const gif = gifs.find(singleGif => singleGif.id === params.id)
  return <Gif {...gif} />
}