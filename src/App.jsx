import { useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import LocationInfo from './components/LocationInfo'
import Pagination from './components/Pagination'
import SearchDimension from './components/SearchDimension'
import useFetch from './hooks/useFetch'
import useSearchDimesion from './hooks/useSearchDimesion'

function App() {

  const [searchLocation, setSearchLocation] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [nameLocation, setNameLocation] = useState('')
  const [locationTarget, setLocationTarget] = useState('')

  const { location } = useFetch(searchLocation, locationTarget)
  const { findLocation, setFindDimesion } = useSearchDimesion(nameLocation)

  let arrayResidents = []
  const residentPerPage = 12
  if (location?.residents.length < residentPerPage) {
    arrayResidents = [...location?.residents]
  } else {
    const lastResident = currentPage * residentPerPage
    arrayResidents = location?.residents.slice(lastResident - residentPerPage, lastResident)
  }

  let arrayPages = []
  let quantityPages = Math.ceil(location?.residents.length / residentPerPage)
  const pagesPerBlock = 5
  let currentBlock = Math.ceil(currentPage / pagesPerBlock)
  if (currentBlock * pagesPerBlock >= quantityPages) {
    for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages; i++) {
      arrayPages.push(i)
    }
  } else {
    for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock; i++) {
      arrayPages.push(i)
    }
  }


  return (
    <div className="App">
      <section className='Father__dimension'>
        <SearchDimension
          setSearchLocation={setSearchLocation}
          findLocation={findLocation}
          nameLocation={nameLocation}
          setNameLocation={setNameLocation}
          setLocationTarget={setLocationTarget}
        />
        <LocationInfo
          location={location}
          findLocation={findLocation}
          setFindDimesion={setFindDimesion}
        />
      </section>
      <Pagination
        currentPage={currentPage}
        arrayPages={arrayPages}
        setCurrentPage={setCurrentPage}
        quantityPages={quantityPages}
      />
      <section className='Residents'>
        {
          arrayResidents?.map(url => (
            <CardResident
              key={url}
              url={url}
            />
          ))
        }
      </section>
      <Pagination
        currentPage={currentPage}
        arrayPages={arrayPages}
        setCurrentPage={setCurrentPage}
        quantityPages={quantityPages}
      />
    </div>
  )
}

export default App
