import React from 'react'

const TopicEdit = (props) => {
    const { sub } = props
    return (
        <div>
           <h1>TopicEdit go here</h1> 
           <p>Sub is {sub.name}</p>
           <p>Sub id {sub.id}</p>
        </div>
    )
}

export default TopicEdit