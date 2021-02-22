import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'


//>>>>>>>>>>>>>.......
const Navbar = () => {
    const [click, setclick] = useState(false);
    const [button, setbutton] = useState(true)
    const handleclick = () => {
        setclick(!click)
    }
    const closeMobileMenu = ()=> setclick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setbutton(false);
        }else{
            setbutton(true)
        }
    }
useEffect(()=> {
    showButton()
},[0])


    window.addEventListener('resize', showButton);

    return (
        <>
           <nav className="navbar">
               <div className="navbar-container">
                   <Link to="/" className="navbar-logo">
                     CP <i class="fab fa-typo3" />
                   </Link>
                   <div className="menu-icon" onClick={handleclick}>
                       <i className={click ? 'fas fa-times' : ' fas fa-bars'} />
                   </div>

                   <ul className={click ? 'nav-menu active': 'nav-menu'}>

                        <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                product 
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/" className="nav-links-mobile"
                            onClick={closeMobileMenu}>
                                Sign Up 
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
               </div>
           </nav>
        </>
    );
};

export default Navbar;