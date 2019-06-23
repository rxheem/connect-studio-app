import React, { Fragment } from 'react';

const OSAndSocialIcons = props => {
  return (
    <Fragment>
      <ul
        className='main-nav'
        role='navigation'
        style={{ display: 'inlineblock' }}
      >
        {/* Apple*/}
        <li>
          <a href='/'>
            <i
              className='fab fa-apple'
              style={{ color: '#7d7d7d', marginRight: '7px' }}
            />
          </a>
        </li>

        <li>
          {/* Android */}
          <a href='/'>
            <i
              className='fab fa-android'
              style={{ color: '#a4c639', marginRight: '7px' }}
            />
          </a>
        </li>

        <li>
          {/* Facebook */}
          <a href='/'>
            <i
              className='fab fa-facebook'
              style={{ color: '#3b5998', marginRight: '7px' }}
            />
          </a>
        </li>

        {/* YouTube */}
        <a href='/'>
          <i
            className='fab fa-youtube'
            style={{ color: '#ff0000', marginRight: '7px' }}
          />
        </a>

        {/* Instagram */}
        <li>
          <a href='/'>
            <i
              className='fab fa-instagram'
              style={{ color: '#8a3ab9', marginRight: '7px' }}
            />
          </a>
        </li>

        {/* Twitter */}
        <li>
          <a href='/'>
            <i
              className='fab fa-twitter'
              style={{ color: '#00acee', marginRight: '7px' }}
            />
          </a>
        </li>
      </ul>

      <style jsx scoped>{`
        .main-nav li {
          display: inline-block; /* see here*/
          padding: 10px;
        }
      `}</style>
    </Fragment>
  );
};

export default OSAndSocialIcons;
