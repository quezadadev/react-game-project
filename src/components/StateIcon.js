import React from 'react';

const StateIcon = ({ icon }) => {

  return (
    <img src={`${icon.image}`} alt={`${icon.state}`} width="500" height="600"></img>
  )

}

export default StateIcon;