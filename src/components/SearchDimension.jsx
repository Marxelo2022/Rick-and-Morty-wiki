import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SearchDimension = ({ setSearchLocation, findLocation, nameLocation, setNameLocation, setLocationTarget }) => {

  const [isActiveList, setIsActiveList] = useState(false)

  const LookLocation = e => {
    e.preventDefault()
    setNameLocation(e.target.children[0].value)
    setIsActiveList(true)
  }

  const haddleLocation = info => {
    setLocationTarget(info.url)
    setNameLocation(info.name)
  }

  const displayList = e => {
    console.log('hola')
    setNameLocation(e.target.value)
    setIsActiveList(true)
  }

  useEffect(() => {
    const toogleChange = () => setIsActiveList(false)
    document.addEventListener('click', toogleChange)
  }, [])


  return (
    <form className='search__container' onSubmit={LookLocation}>
      <input
        onChange={displayList}
        className='search__input'
        value={nameLocation}
        type="text"
        placeholder='Enter the name Dimension' />
        
      <div className={isActiveList ? 'OnList' : 'OffList'}>
        {
          findLocation?.map(location => (
            <li
              className='search__suggestions'
              key={location.id}
              onClick={() => haddleLocation(location)}
            >
              {location.name}
            </li>
          ))
        }
      </div>
    </form>
  )
}

export default SearchDimension