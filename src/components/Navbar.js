import React from 'react';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'; // Import icons from FontAwesome



export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} ` }>
      <div className="container-fluid" >
        <a className="navbar-brand" href="/">{props.title}</a>
        <div style={{ position: 'absolute', right: '15px'}}>
          {/* Conditionally render sun or moon icon based on mode */}
          {props.mode === 'dark' ?
            <FontAwesomeIcon icon={faSun} onClick={props.btn} style={{ cursor: 'pointer' }} size='2x'/>
            :
            <FontAwesomeIcon icon={faMoon} onClick={props.btn} style={{ cursor: 'pointer' }} size='2x' />
          }
        </div>
      </div>
    </nav>
  );
}

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   about: PropTypes.string.isRequired,
//   mode: PropTypes.oneOf(['light', 'dark']).isRequired,
//   btn: PropTypes.func.isRequired
// };

// Navbar.defaultProps = {
//   title: "lol",
//   about: 'lol'
// };


