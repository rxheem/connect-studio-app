import React, { Fragment } from 'react';

const OSAndSocialIcons = props => {
  return (
    <Fragment>
      <nav className='navbar'>

        {/* Apple*/}
        <a className='navbar-item' href='/'>
          <i
            className='fab fa-apple'
            style={{ color: '#7d7d7d', marginRight: '7px' }}
          />
        </a>

        {/* Android */}
        <a className='navbar-item' href='/'>
          <i
            className='fab fa-android'
            style={{ color: '#a4c639', marginRight: '7px' }}
          />
        </a>

        {/* Facebook */}
        <a className='navbar-item' href='/'>
          <i
            className='fab fa-facebook'
            style={{ color: '#3b5998', marginRight: '7px' }}
          />
        </a>

        {/* YouTube */}
        <a className='navbar-item' href='/'>
          <i
            className='fab fa-youtube'
            style={{ color: '#ff0000', marginRight: '7px' }}
          />
        </a>

        {/* Instagram */}
        <a className='navbar-item' href='/'>
          <i
            className='fab fa-instagram'
            style={{ color: '#8a3ab9', marginRight: '7px' }}
          />
        </a>

        {/* Twitter */}
        <a className='navbar-item' href='/'>
          <i
            className='fab fa-twitter'
            style={{ color: '#00acee', marginRight: '7px' }}
          />
        </a>
      </nav>
    </Fragment>
  )
}

export default OSAndSocialIcons;
