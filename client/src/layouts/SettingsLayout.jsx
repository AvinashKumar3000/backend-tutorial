import PropTypes from 'prop-types';
import React from 'react';
import Card from '../components/common/Card';

export default function SettingsLayout({ children }) {
    return <div>
        <Card title={'asdf'}></Card>
        <h1>Settings</h1>
        <div>{children}</div>
    </div>;
}

SettingsLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
