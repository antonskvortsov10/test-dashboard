import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../App'
import Info from '../components/info'

const Results: React.FC = () => {
    const {testId} = useParams()

    const {cards} = useContext(Context)

    //console.log(cards.length)
    //console.log(`id: ${testId}`)

    const getCardIdxById = (id) => cards.findIndex(card => card.id === id)

    return (
        <>
            <Info info={cards[getCardIdxById(parseInt(testId))].name} />
        </>
    )
}

export default Results
