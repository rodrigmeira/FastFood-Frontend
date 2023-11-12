import React, { useState } from "react";
import foodLogo from "../../Assets/fastfood-logo.png";
import "./Navbar.scss";

const Navbar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <header className="navbarDesk">
      <div className="navbarDesk__logo">
        <img src={foodLogo} alt="" className="logo" />
      </div>

      <div className="navbarDesk__menu desktop">
        <ul>
          <li>
            <a href="#Orders" onClick={() => handleMenuItemClick('Orders')} className={activeMenuItem === 'Orders' ? 'active' : ''}>Pedidos</a>
          </li>
          <li>
            <a href="#Kitchen" onClick={() => handleMenuItemClick('Kitchen')} className={activeMenuItem === 'Kitchen' ? 'active' : ''}>Cozinha</a>
          </li>
          <li>
            <a href="#Retirada" onClick={() => handleMenuItemClick('Retirada')} className={activeMenuItem === 'Retirada' ? 'active' : ''}>Retirada</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
