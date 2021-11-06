import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum'
import IconButton from '@mui/material/IconButton';

import tinderimg from '../Assets/tinderimg.png'


function Header() {
    return (
        <div className="header">

            <IconButton>
                 <PersonIcon fontSize='large' className='header_icon'/> 
            </IconButton>

            <img 
            className="header_logo"
            src='https://spng.pngfind.com/pngs/s/13-131073_this-post-is-a-part-of-tinder-logo.png'
             alt=""
            />
            <IconButton>
                <ForumIcon fontSize='large' className="header_icon"/>
            </IconButton>
                    
           
        </div>
    )
}

export default Header
