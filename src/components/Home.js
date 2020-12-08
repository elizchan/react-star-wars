import React, {useState, useEffect}from "react"
import axios from 'axios'
import {Link} from 'react-router-dom'

import Loader from "./common/Loader"

const Home = (props) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        axios.get('https://swapi.dev/api/starships/').then((res)=>{
            setData(res.data.results)
        }).then(()=>setLoading(false))
    }, [])

    const display = () => {
        if(loading){
            return <Loader />
        }else{
            return data.map((ship, index)=>(
                <div key={ship.name} className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{ship.name}</span>
                            <p>{ship.model}</p>
                        </div>
                        <div className="card-action">
                            <Link to = {{pathname: `/Starship/${index}`, state: {ship} }} key={ship.name}>Starship Info</Link>
                        </div>
                    </div>
                </div>
            ))
        }
    }
    return (
        <div class="container">
            <h2>Starships</h2>
            <div className="row">
                {display()}
            </div>
        </div>
    )
}
export default Home