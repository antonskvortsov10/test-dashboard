import React from 'react'
import { Link } from 'react-router-dom'

import arrow from '../../assets/arrow-left.png'

import './info.css'

const Info: React.FC = ({info}) => {
    return (
        <>
            <div className="result-info">{info}</div>
            <div className="result-info-link">
                <Link id="arrow-left" to="/"><img src={arrow} /></Link>
                <Link id="back" to="/">Back</Link>
            </div>
        </>
    )
}

export default Info
