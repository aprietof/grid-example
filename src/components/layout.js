import PropTypes from 'prop-types';
import React from 'react';

function Layout({ children }) {
  return <div className="flex flex-col min-h-screen font-sans text-gray-900">{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
