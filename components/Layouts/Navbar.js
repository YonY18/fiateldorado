import React from "react";
import FiatLogo from "../../assets/media/header_logo-fiat.svg"
import Image from 'next/image'

const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className="navbar fixed">
      <div className="container">
        <div className="navbar-wrapper clearfix">
            <div className="navbar-header">
                <div className="navbar-brand">
                <Image src={FiatLogo} alt="FIAT" />
                </div>
            </div>
            <div id="main-menu">
                <div className="button-close"><span className="vct-icon-close"></span></div>
                <ul id="menu-main-menu" className="nav navbar-nav"><li id="menu-item-477" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-335 current_page_item menu-item-477"><a href="/" aria-current="page">Inicio</a></li>
                    <li id="menu-item-234" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-has-children menu-item-234"><button className="dropdown-toggle vct-icon-dropdown"></button>
                        <ul className="sub-menu">
                            <li id="menu-item-237" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-237"><a href="/cronos">Cronos</a></li>
                            <li id="menu-item-238" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-238"><a href="/pulse">Pulse</a></li>
                            <li id="menu-item-236" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-236"><a href="/toro">Toro</a></li>
                            <li id="menu-item-239" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-239"><a href="/mobi">Mobi</a></li>
                            <li id="menu-item-240" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-240"><a href="/fiorino">Fiorino</a></li>
                            <li id="menu-item-241" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-241"><a href="/strada">Strada</a></li>
                        </ul>
                    </li>
                    <li id="menu-item-1017" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1017"><a href="#form">Contacto</a></li>
                </ul>
            </div>
        </div>
    </div>


    </nav>
  );
};

export default Navbar;