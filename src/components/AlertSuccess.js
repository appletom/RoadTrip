import React from 'react';
import PropTypes from 'prop-types';


const AlertSuccess = ({children, title, type}) => {
  return (
    <div className={`alert-wrapper ${type}`}>
    <h2>Success</h2>
    {children}
    </div>

  )
}

{ /* set a success and error alert */}
AlertSuccess.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired
    ]),
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    
}


export default AlertSuccess;