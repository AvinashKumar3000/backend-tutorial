import PropTypes from 'prop-types';
import React from 'react';

export default function SettingsLayout({ children }) {
    return <div>
        <h1>Settings</h1>
        <div>{children}</div>
    </div>;
}

SettingsLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
