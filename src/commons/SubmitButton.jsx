import React from 'react'

function SubmitButton({ text, handler, FSize, type }) {
    return <button className={`submit-button ${type}`}
        style={{
            fontSize: `${FSize}px`
        }}
        onClick={handler}>{text}</button>
}

export default SubmitButton