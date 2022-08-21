import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useSearchDimesion = (nameLocation) => {

    const [findLocation, setFindDimesion] = useState()
    
    useEffect(() => {
      if(nameLocation){
          const URL = `https://rickandmortyapi.com/api/location/?name=${nameLocation}`
          axios.get(URL)
        .then(res => setFindDimesion(res.data.results))
        .catch(err => console.log(err))
      }
    }, [nameLocation])
    

  return {findLocation, setFindDimesion}
}

export default useSearchDimesion