import { useState, useEffect, useContext } from 'react'
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext'

// Si keyword no contiene nada lo pasamos a null (ya que una buscada en giphy con null te busca cosas similar a random)
export const useGifs = ({ keyword } = { keyword: null }) => {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(() => {
    setLoading(true)

    //Recuperamos la keyword del localstorage  
    const keywordToUse = keyword || localStorage.getItem('lastKeyword')
    //En caso de que no exista el key lastKeyword de nuestro localstorage no pasa nada ya que solo guardara null nuestro keywordToUse

    getGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        //Guardamos la Keyword en el localstorage
        localStorage.setItem('lastKeyword', keywordToUse)
        setLoading(false)
      })
  }, [keyword, setGifs]) // dependencia de nuestro efecto

  return { loading, gifs }
}