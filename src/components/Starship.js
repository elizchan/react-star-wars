import React from "react"

const Starship = (params) => {
    let shipInfo = params.location.state.ship
    return (
        <div>
            <h1> {shipInfo.name} </h1>
            <h1>{shipInfo.model}</h1>
            <a href='/'>Return</a>
        </div>
    )
    
}

export default Starship