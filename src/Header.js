import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function Header() {
  return (
    <div className='header'>
        <img 
          className='header_icon'
          src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102014/airbnb.png?itok=d2X_Ds1a"
          alt="page"
        
        
        />

        <div className='header_center'>
            <input type="text" />
            <SearchIcon />
        </div>

        <div className='header_right'>
            <p>Become a host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <AccountCircleIcon />


        </div>

      
    </div>
  )
}

export default Header
