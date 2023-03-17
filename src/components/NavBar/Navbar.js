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
                    <Link to="/webquest" className='nav-links' onClick={closeMobileMenu}>
                        Introduction
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/webquest/tasks" className='nav-links' onClick={closeMobileMenu}>
                        Tasks
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/webquest/process" className='nav-links' onClick={closeMobileMenu}>
                        Process
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/webquest/resources" className='nav-links' onClick={closeMobileMenu}>
                        Resources
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/webquest/evaluation" className='nav-links' onClick={closeMobileMenu}>
                        Evaluation
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/webquest/conclusion" className='nav-links' onClick={closeMobileMenu}>
                        Conclusion
                    </Link>
                </li>
            </ul>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
