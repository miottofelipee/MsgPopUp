import React from 'react'

function Comptesk({pose, task}) {
    return (
            <div key={pose}>
                <p>#{pose}<span>{task}</span></p>
            </div>
    )
}

export default Comptesk