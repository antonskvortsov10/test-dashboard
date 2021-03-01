import React, { createContext, useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Title from './components/title'
import { DashboardPage, NoResults, Results, Finalize } from './pages'
import { fetchSites, fetchTests } from './http/testAPI'

import './App.css'

export const Context = createContext(null)

const App: React.FC = () => {
    const [sites, setSites] = useState([])
    const [tests, setTests] = useState([])
    
    useEffect(() => {
        fetchSites().then(data => {
            setSites(data)
        }),
        fetchTests().then(data => {
            setTests(data)
        })
    }, [])

    const getSiteById = (id) => sites.find(site => site.id === id)

    const getCards = () => {
        const cards: Array<object> = []
        
        for (let test of tests) {
            const card = {
                id: test.id,
                name: test.name,
                type: test.type.replace('_', '-'),
                status: test.status,
                siteId: test.siteId,
                site: getSiteById(test.siteId).url.replace(/(http:\/\/)|(https:\/\/)(www.)?/, ''),
                isDrafted: test.status === 'DRAFT' ? 'Finalize' : 'Results'
            }

            //console.log(`card #${test.id}: [${card.name}, ${card.type}, ${card.status}, ${card.site}, ${card.isDrafted}]`)
            cards.push(card)
        }

        return cards
    }

    const cards = getCards()

    return (
        <div className="container">
            <Context.Provider value={{cards: cards}}>
                <Title title={'Dashboard'} />
                <Switch>
                    <Route exact path="/" component={DashboardPage} />
                    <Route exact path="/no-results" component={NoResults} />
                    <Route exact path="/results/:testId" component={Results} />
                    <Route exact path="/finalize/:testId" component={Finalize} />
                </Switch>
            </Context.Provider>
        </div>
    )
}

export default App
