import React from 'react'
import './Search.css'
import img2 from '../images/image 2.svg'
import Atm from '../images/atm.svg'
import Parking from '../images/park.svg'
import Eat from '../images/coff.svg'
import Dept from '../images/dept.svg'
import AO from '../images/ao.svg'
import rest from '../images/rest.svg'
import cc from '../images/cc.svg'

const Serach = () => {
    return (
        <div className='conns'>

            <div class="wrapper">
                <div class="searchBar">
                    <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" value="" />
                    <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
                        <svg style={{ width: "24px", height: '24px' }} viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='impsearch'>
                <div className='left'>
                    <div className='l1'>
                        <img src={img2} />
                        <p className='tt'>Seminar Halls</p>


                    </div>
                    <div className='l1'>
                    <img src={Atm} />
                        <p className='tt'>ATM</p>


                    </div>
                    <div className='l1'>
                    <img src={Parking} />
                        <p className='tt'>Parking</p>


                    </div>
                    <div className='l1'>
                    <img src={Eat} />
                        <p className='tt'>Eatries</p>


                    </div>

                </div>
                <div className='right'>
                    <div className='l1'>
                    <img src={Dept} />
                        <p className='tt'>Departments</p>


                    </div>
                    <div className='l1'>
                    <img src={AO} />
                        <p style={{textAlign:'center'}} className='tt'> Administrative Office</p>
                    </div>
                    <div className='l1'>
                    <img src={rest} />
                        <p style={{textAlign:'center'}} className='tt'>Restrooms</p>


                    </div>
                    <div className='l1'>
                    <img src={cc} />
                        <p style={{textAlign:'center'}} className='tt'>Computer Centers</p>


                    </div>

                </div>

            </div>

        </div>


    )
}

export default Serach