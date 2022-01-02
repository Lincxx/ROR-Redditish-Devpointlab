import React from 'react'

const Topic = (props) => {
    const { sub, topic } = props
    return (
        <div>
           <h1>Topic go here</h1> 
           <p>Sub is {sub.name}</p>
           <p>Sub id {sub.id}</p>
           <h1>Topic info</h1>
           <p>Topic name: {topic.name}</p>
           <p>Topic id: {topic.id}</p>
        </div>
    )
}

export default Topic