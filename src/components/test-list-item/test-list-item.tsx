import React from 'react'
import { useHistory } from 'react-router-dom'
import { RESULTS_ROUTE, FINALIZE_ROUTE } from '../../utils/consts'

import './test-list-item.css'

const TestListItem: React.FC = ({card}) => {
    const history = useHistory()

    const getBorderColor = (siteId) => {
        switch (siteId) {
            case 1:
                return '#E14165'
            case 2:
                return '#C2C2FF'
            case 3:
                return '#8686FF'
        }
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'ONLINE':
                return '#1BDA9D'
            case 'PAUSED':
                return '#FF8346'
            case 'STOPPED':
                return '#FE4848'
        }
    }

    return (
        <li className="card" style={{borderLeftColor: getBorderColor(card.siteId)}}>
            <div id="name">{card.name}</div>
            <div id="type">{card.type}</div>
            <div id="status" style={{color: getStatusColor(card.status)}}>{card.status}</div>
            <div id="site">{card.site}</div>
            <div id="isDrafted" onClick={ card.status === 'DRAFT' ? () => history.push(FINALIZE_ROUTE + '/' + card.id) : () => history.push(RESULTS_ROUTE + '/' + card.id)}><button style={{background: card.status === 'DRAFT' ? '#7D7D7D' : '#2EE5AC'}}>{card.isDrafted}</button></div>
        </li>
    )
}

export default TestListItem
