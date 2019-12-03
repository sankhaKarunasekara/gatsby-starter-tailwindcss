import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Link, navigate } from 'gatsby';
import PropTypes from 'prop-types';

const Header = ({ siteTitle }) => {
  const [isOpen, toggleOpen] = useState(false);
  return (
    <header className="w-screen mb-6 text-white bg-teal-600">
      <div className="flex items-center justify-between max-w-4xl px-4 py-6 mx-auto">
        <h1 className="text-4xl font-bold">
          <Link to="/">{siteTitle}</Link>
        </h1>
        <button
          onClick={() => toggleOpen(!isOpen)}
          type="button"
          className="relative z-50 inline-block px-3 py-2 text-sm font-semibold leading-none tracking-wide uppercase border border-white"
        >
          Menu
        </button>
        <ReactModal
          isOpen={isOpen}
          contentLabel="Site navigation"
          className="inset-0 flex items-center justify-center h-full text-3xl text-white bg-teal-600"
        >
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => {
                    toggleOpen(false);
                    navigate('/');
                  }}
                  type="button"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    toggleOpen(false);
                    navigate('/page-2');
                  }}
                  type="button"
                >
                  Page 2
                </button>
              </li>
            </ul>
          </nav>
        </ReactModal>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
