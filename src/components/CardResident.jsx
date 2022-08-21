import React from 'react'
import useCharacter from '../hooks/useCharacter'

const CardResident = ({ url }) => {

    const character = useCharacter(url)

    return (
        <article className='resident__container'>
            <img className='resident__img' src={character?.image} alt="" />
            <h2 className='resident__title'>{character?.name}</h2>
            <hr />
            <ul className='resident__ul'>
                <li className='resident__list'><span className='resident__bold'>Status: </span>{character?.status}</li>
                <li className='resident__list'><span className='resident__bold'>Origin: </span>{character?.origin.name}</li>
                <li className='resident__list'><span className='resident__bold'>Episodes where appear: </span>{character?.episode.length}</li>
            </ul>
        </article>
    )
}

export default CardResident