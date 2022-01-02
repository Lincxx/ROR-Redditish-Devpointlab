import React from "react";

const Subs = (props) => {
    const { subs } = props
    const renderSubs = () => {
        return subs.map( (sub) => {
            return (
                <div>
                    <h1>{ sub.name }</h1>
                    <a href={`subs/${sub.id}`}>show</a>
                    <a href={`subs/${sub.id}/topics`}>show topics</a>
                    <a href={`subs/${sub.id}/edit`}>edit</a>
                    <a href={`subs/${sub.id}`} data-method='delete'>delete</a>
                </div>
            )
        })
    }
    return(
        <div>
            <h1>Subs component here</h1>
            <a href='/subs/new'>Add</a>
            { renderSubs() }
        </div>
    )
}

export default Subs