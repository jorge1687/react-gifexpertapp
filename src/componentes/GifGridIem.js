import React from 'react'

export const GifGridIem = ({id, title, url}) => {
    return (
        <div>
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
