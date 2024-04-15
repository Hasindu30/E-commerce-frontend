import React,{useState} from 'react'
import './Narbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart.png'




const Navbar = () => {
  const [menu,setMenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}>Shop {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}>Men {menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}>Women {menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}>Kids {menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
