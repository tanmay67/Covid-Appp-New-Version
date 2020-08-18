import React from 'react';
import spinner from '../../img/spinner.gif';

const Spinner = () => {
  return (
    <div className="mt-5">
      <img
        src={spinner}
        alt="Loading..."
        style={{
          width: '200px',
          margin: 'auto',
          display: 'block',
        }}
      />
    </div>
  );
};

export default Spinner;
