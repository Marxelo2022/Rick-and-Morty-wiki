import React from 'react'

const LocationInfo = ({ location, setFindDimesion, findDimension }) => {



    return (
        <section className='location__container'>
            <h2 className='location__title'>{location?.name}</h2>
            <ul className='location__ul'>
                <li className='location__list'><span className='location__bold'>Type: </span> {location?.type}</li>
                <li className='location__list'><span className='location__bold'>Dimension: </span>{location?.dimension}</li>
                <li className='location__list'><span className='location__bold'>Population: </span>{location?.residents.length}</li>
            </ul>
        </section>
    )
}

export default LocationInfo