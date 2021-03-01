import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../App'
import Info from '../components/info'

const Finalize: React.FC = () => {
    const {testId} = useParams()
    //console.log(`testId: ${testId}`)

    const {cards} = useContext(Context)

    const getCardIdxById = (id) => cards.findIndex(card => card.id === id)

    //console.log(cards.length)
    //console.log(cards)
    
    return (
        <>
            <Info info={cards[getCardIdxById(parseInt(testId))].name} />
        </>
    )
}

export default Finalize
