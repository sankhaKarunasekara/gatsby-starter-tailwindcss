/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-gray-600">
      <Header />
      <main id="main" className="flex-1 w-full max-w-4xl px-4 pb-6 mx-auto">
        {children}
      </main>
      <footer className="w-full max-w-4xl p-4 mx-auto">
        © {new Date().getFullYear()}, Built with{' '}
        <a
          href="https://www.gatsbyjs.org"
          className="font-semibold hover:text-teal-600"
        >
          Gatsby
        </a>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
