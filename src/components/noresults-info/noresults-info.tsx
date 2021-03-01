import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../App'

import './noresults-info.css'

const NoResultsInfo: React.FC = () => {
    const {cards} = useContext(Context)

    return (
        <div>
            <div id="message">Your search did not match any results.</div>
            <Link id="reset" to="/"><label>Reset</label></Link>
        </div>
    )
}

export default NoResultsInfo
