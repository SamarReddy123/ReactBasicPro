import { Notifications, Search, ShoppingBag } from '@mui/icons-material'

import React from 'react'
import './Header.css';
const Header = () => {
    return (

        <div className="row" id='header'>

            <div className="col-md-3" id='left'>
                
                <h2>Shoping Mart</h2>
            </div>

            <div className="col-md-5" id='center'>
                <div className="searchbar">
                    <Search className='search' />
                    <input type="text" placeholder='search for items' className='searchInput' />
                </div>
            </div>

            <div className="col-md-4" id='right'>
                <div className='icons'>
                    <div className="icon">
                        <Notifications />
                        <span className='badge'>2</span>
                    </div>
                    <div className="icon">
                        <ShoppingBag />
                        <span className='badge'>3</span>
                    </div>
                </div>
                <h5 className='link'>Signin</h5>
                <h5 className='link'>Signout</h5>
                <div>
                <img src="https://th.bing.com/th/id/OIP.PZsMLTIgXaEsdCA0VjTo7gHaLH?pid=ImgDet&rs=1" alt="" className='headerimg'/>&nbsp;
                <small>profile</small>
                </div>
            </div>
        </div>

    )
}

export default Header