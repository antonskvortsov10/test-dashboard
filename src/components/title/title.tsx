import React from 'react'

import './title.css'

const Title: React.FC = ({title}) => {
    return (
        <h1 className="title">{title}</h1>
    )
}

export default Title
