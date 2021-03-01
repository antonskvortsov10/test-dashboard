import React from 'react'
import Search from '../components/search'
import NoResultsInfo from '../components/noresults-info'

const NoResults: React.FC = () => {
    return (
        <>
            <Search results={false} />
            <NoResultsInfo />
        </>
    )
}

export default NoResults
