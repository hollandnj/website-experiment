import React from 'react';

// A stateless or pure component...

const Departure = ({time, destination, status}) =>
  <div>{time} :: {destination} :: {status}</div>;
 
export default Departure
