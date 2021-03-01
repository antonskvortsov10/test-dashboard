import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { NO_RESULTS_ROUTE } from '../../utils/consts'
import { Context } from '../../App'

import icon from '../../assets/search.png'

import './search.css'

const Search: React.FC = ({results}) => {
    const {cards} = useContext(Context)

    const history = useHistory()
    
    const search = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            history.push(NO_RESULTS_ROUTE)
        }
    }
    
    return (
        <div className="search">
            <input className="search-input" type="text" placeholder="What test are you looking for?" onKeyPress={search} />
            <img className="search-icon" src={icon} />
            <label className="search-tests">{ results ? cards.length : 0} tests</label>
        </div>
    )
}

export default Search
