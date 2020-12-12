import React from 'react';
import PropTypes from 'prop-types';
import '../alertError.css';


const AlertError = ({children, title, type}) => {
  return (
  <div className={`alert-wrapper ${type}`}>
    <h2>Try again</h2>
    {children}

  
  </div>
  )
}

{ /* set a success and error alert */}
AlertError.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired
    ]),
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    
}

export default AlertError;