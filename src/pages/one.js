import React from 'react'
import "../pages/one.css"
import Alik from "../image/alik.png"
import Face from "../image/face.png"

const One =()=>{
    return(
        <div className = {'first'}>
            <div className = {'one_mother'}>
                <img src = {Alik} />
            </div>
                <h1 className = {'web_name'}>I am Aleqsan Hertevtcyan</h1>
                <h1 className = {'web_dev'}>Web Developer</h1>
                <h1 className = {'web_desig'}>Web Designer</h1>
                <img className = {'face'} src = {Face} />
        </div>
        
    )
}

export default One 