import React from 'react'

function Stat({ type, text }) {
    return <button className={`stat ${type}`}>{text}</button>
}

export default Stat