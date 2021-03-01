import React from 'react'
import Search from '../components/search'
import TestList from '../components/test-list'

const DashboardPage: React.FC = () => {
    return (
        <>
            <Search results={true} />
            <TestList />
        </>
    )
}

export default DashboardPage
