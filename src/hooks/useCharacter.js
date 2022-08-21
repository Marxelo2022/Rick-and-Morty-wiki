import axios from "axios"
import { useEffect, useState } from "react"

const useCharacter = (url) => {

    const [character, setCharacter] = useState()

    useEffect(() => {
      axios.get(url)
        .then(res => setCharacter(res.data))
        .catch(err => console.log(err))
    }, [])
   
  return character
}

export default useCharacter