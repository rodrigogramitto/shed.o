import React from 'react';

function MyShedButton({ profileView, toggleProfile }) {
  const MyShed = <button type="button" onClick={toggleProfile}>My Shed</button>;
  const Back = <button type="button" onClick={toggleProfile}>Back</button>;
  return (
    <div>
      { profileView ? Back : MyShed }
    </div>
  );
}

export default MyShedButton;
