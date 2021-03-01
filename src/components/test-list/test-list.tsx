import React, { useContext, useState } from 'react'
import TestListItem from '../../components/test-list-item'
import { Context } from '../../App'

import sort from '../../assets/sort.png'

import './test-list.css'

enum Status {
    ONLINE,
    PAUSED,
    STOPPED,
    DRAFT
}

const TestList: React.FC = () => {
    const {cards} = useContext(Context)
    const [sortState, setSortState] = useState<Array<string>>(['NO', 'NO', 'NO', 'NO'])

    const sortByName = () => {
        if (sortState[0] === 'NO' || sortState[0] === 'DESC') {
            cards.sort((prev, next) => {
                if ( prev.name < next.name ) return -1;
                if ( prev.name === next.name ) return 0;
                if ( prev.name < next.name ) return 1;
            })
            setSortState([
                'ASC',
                ...sortState.slice(1)
            ])
        }
        else {
            cards.sort((prev, next) => {
                if ( prev.name > next.name ) return -1;
                if ( prev.name === next.name ) return 0;
                if ( prev.name > next.name ) return 1;
            })
            setSortState([
                'DESC',
                ...sortState.slice(1)
            ])
        }
    }

    const sortByType = () => {
        if (sortState[1] === 'NO' || sortState[1] === 'DESC') {
            cards.sort((prev, next) => {
                if ( prev.type < next.type ) return -1;
                if ( prev.type === next.type ) return 0;
                if ( prev.type < next.type ) return 1;
            })
            setSortState([
                ...sortState.slice(0, 1),
                'ASC',
                ...sortState.slice(2)
            ])
        }
        else {
            cards.sort((prev, next) => {
                if ( prev.type > next.type ) return -1;
                if ( prev.type === next.type ) return 0;
                if ( prev.type > next.type ) return 1;
            })
            setSortState([
                ...sortState.slice(0, 1),
                'DESC',
                ...sortState.slice(2)
            ])
        }
    }

    const sortBySite = () => {
        if (sortState[3] === 'NO' || sortState[3] === 'DESC') {
            cards.sort((prev, next) => {
                if ( prev.site < next.site ) return -1;
                if ( prev.site === next.site ) return 0;
                if ( prev.site < next.site ) return 1;
            })
            setSortState([
                ...sortState.slice(0, 3),
                'ASC'
            ])
        }
        else {
            cards.sort((prev, next) => {
                if ( prev.site > next.site ) return -1;
                if ( prev.site === next.site ) return 0;
                if ( prev.site > next.site ) return 1;
            })
            setSortState([
                ...sortState.slice(0, 3),
                'DESC'
            ])
        }
    }

    const sortByStatus = () => {
        if (sortState[2] === 'NO' || sortState[2] === 'DESC') {
            cards.sort((prev, next) => {
                if ( Status[prev.status] < Status[next.status] ) return -1;
                if ( Status[prev.status] === Status[next.status] ) return 0;
                if ( Status[prev.status] < Status[next.status] ) return 1;
            })
            setSortState([
                ...sortState.slice(0, 2),
                'ASC',
                ...sortState.slice(3)
            ])
        }
        else {
            cards.sort((prev, next) => {
                if ( Status[prev.status] > Status[next.status] ) return -1;
                if ( Status[prev.status] === Status[next.status] ) return 0;
                if ( Status[prev.status] > Status[next.status] ) return 1;
            })
            setSortState([
                ...sortState.slice(0, 2),
                'DESC',
                ...sortState.slice(3)
            ])
        }
    }


    return (
        <div className="test-list">
            <div className="test-list-titles">
                <div id="name">Name <button onClick={sortByName}><img src={sort} /></button></div>
                <div>Type <button onClick={sortByType}><img src={sort} /></button></div>
                <div>Status <button onClick={sortByStatus}><img src={sort} /></button></div>
                <div>Site <button onClick={sortBySite}><img src={sort} /></button></div>
            </div>
            <ul className="test-list-items">
                {cards.map(card =>
                    <TestListItem key={card.id} card={card} />
                )}
            </ul>
        </div>
    )
}

export default TestList
