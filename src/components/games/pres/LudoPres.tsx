import React from "react"
import {useNavigate} from "react-router-dom"

const LudoPres = () => {
    const history = useNavigate()
    return(
        <div className="ludo-pres">
            <h2>Ludo</h2>
            <div className="bg"></div>
            <button className="play" onClick={() => history("/games/Ludo")}>Cliquez pour jouer</button>
        </div>
    )
}

export default LudoPres