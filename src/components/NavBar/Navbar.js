import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/webquest" className='navbar-logo'>
            A Modern View on Gender Theory&nbsp;⚧
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <a href="#intro" className='nav-links' onClick={closeMobileMenu}>
                        Introduction
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="#tasks" className='nav-links' onClick={closeMobileMenu}>
                        Tasks
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="#process" className='nav-links' onClick={closeMobileMenu}>
                        Process
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="#resources" className='nav-links' onClick={closeMobileMenu}>
                        Resources
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="#eval" className='nav-links' onClick={closeMobileMenu}>
                        Evaluation
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="#conclusion" className='nav-links' onClick={closeMobileMenu}>
                        Conclusion
                    </a>
                </li>
            </ul>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
