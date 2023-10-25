import React from 'react'
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import logo from './logo.png';

function Header() {
    const[{ basket, user}, dispatch] = useStateValue();


    const navigate = useNavigate();

    const navigateToHome = ()=>{
        navigate("/")
    }
    const navigateToorderpage = ()=>{
        navigate("/order")
    }
    const navigateToCheckout = ()=>{
        navigate("/checkout")
    }

    return (
        <div className="home">
      <div className="home_container">
      <div className='header'>
        <img className="header_logo" src={logo}  onClick={navigateToHome} />
        <div className="header__nav" style={{marginLeft : '937px' }}>
                <div className="header__option" onClick={navigateToHome}>
                    <span className="header_optionLineOne">Home </span>
                </div>
                <div className="header__option" onClick={navigateToorderpage}>
                  <span className="header_optionLineOne">Orders</span>
                </div>
                <div onClick={navigateToCheckout} className="header__optionBasket">
                    <ShoppingBasketIcon/>
                </div>
            </div>
</div>
      </div>
</div>
    )
}

export default Header;