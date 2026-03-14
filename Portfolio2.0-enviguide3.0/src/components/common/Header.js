import React, { useRef } from "react";
import { NavLink  } from 'react-router-dom';

const Header = () => {

    const collapseRef = useRef(null);

    const handleNavLinkClick = () => {
        if (window.innerWidth < 992) { // Bootstrap's lg breakpoint
            const collapseElement = collapseRef.current;
            if (collapseElement?.classList.contains("show")) {
                // Close the menu
                const bsCollapse = new window.bootstrap.Collapse(collapseElement, { toggle: false });
                bsCollapse.hide();
            }
        }
    };

    return (
        <>
            <header className="container-fluid">
                <nav className="navbar navbar-expand-lg container-fluid">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <NavLink className="navbar-brand" to={'/'} aria-label="Open navigation menu">
                            <img src="../assets/images/Logo.png" className="headlogo" alt="logo" />
                        </NavLink>
                    </div>

                    <button className="navbar-toggler custommenu-iconbt" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <img className='custommenu-icon' src='../assets/images/mobileiocn.png' alt='menu icon' />
                    </button>

                    <div className="collapse navbar-collapse cstmtest" id="navbarSupportedContent" ref={collapseRef}>
                        <ul className="navbar-nav mx-auto custom-header">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/'} onClick={handleNavLinkClick}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/About-us'} onClick={handleNavLinkClick}>About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/Solutions'} onClick={handleNavLinkClick}>Solutions</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/Blog'} onClick={handleNavLinkClick}>Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/CCF-Calculator'} onClick={handleNavLinkClick}>CCF Calculator</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to={'/Contact-Us'} onClick={handleNavLinkClick}>Contact Us</NavLink>
                            </li> */}
                        </ul>
                        <div className="form-inline my-2 my-lg-0 d-flex" style={{ alignItems: 'center' }}>
                            <div className='header-rightsec'>
                                <NavLink style={{ textDecoration: 'none' }} to={'/Contact-Us'} onClick={handleNavLinkClick}>
                                    <button className="startbt">Contact Us</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;