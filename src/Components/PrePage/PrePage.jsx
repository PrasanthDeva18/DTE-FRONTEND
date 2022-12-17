import React from 'react'
import logo from '../images/keclogo.png'
import './Pre.css'

const PrePage = () => {
  return (
    <div className='background'>
        <div className='logo'>
            <img src={logo}/>
        </div>
        <div className='txt'>
            <p className='front'>Welcome to KEC Map</p>
        </div>
        <div className='btn'>
            <p className='btntxt'>Start your Journey</p>
        </div>

    </div>
  )
}

export default PrePage