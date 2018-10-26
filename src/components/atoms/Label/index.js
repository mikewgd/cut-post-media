import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node,
}

const Label = ({ children, ...props }) => {
  return (
    <label {...props}>{children}</label>
  )
}

Label.propTypes = propTypes

export default Label
