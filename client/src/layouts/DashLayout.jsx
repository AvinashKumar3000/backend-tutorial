import PropTypes from 'prop-types';
import React from 'react';

export default function DashLayout({ children }) {
    return <div>
        <h1>Dash</h1>
        <div>{children}</div>
    </div>;
}

DashLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
