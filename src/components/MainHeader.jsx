import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            {/* In v6 we now DON'T HAVE 'activeClassName' prop. Instead
             we can just use 'className' prop as with all React elements
             BUT with one noticeable CHANGE:
             'className' prop now RECEIVES a function which in turn
             RECEIVES an argument with data about NavLink: */}
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : '')}
              to="/welcome"
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : '')}
              to="/products"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
