import React, { Fragment } from 'react';

const OuterNavigation = props => {
  return (
    <header>
      <div id='OuterNavigation'>
        <nav
          role='navigation'
          className='navbar is-info'
          aria-label='main navigation'
          aria-expanded='false'
        >
          <span />
        </nav>
      </div>
    </header>
  );
};

export default OuterNavigation;
