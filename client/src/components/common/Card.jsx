import PropTypes from 'prop-types';
import React from 'react'

export default function Card({ title, subTitle, desc }) {
  return (
    <div>Card</div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  desc: PropTypes.string
};