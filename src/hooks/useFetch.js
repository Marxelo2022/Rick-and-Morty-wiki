import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetch = (searchLocation, url)  => {

  const [location, setLocation] = useState()

  useEffect(() => {

    let locationNumber
    if (searchLocation === undefined) {
      locationNumber = Math.ceil(Math.random() * 126)
    } else {
      locationNumber = searchLocation
    }
    let URL = `https://rickandmortyapi.com/api/location/${locationNumber}`
    if(url){
      URL=url
    }
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }, [searchLocation,url])


  return { location }
}

export default useFetch