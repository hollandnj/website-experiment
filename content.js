import React from 'react';
import Departure from './departure';

class Content extends React.Component {
  render() {
    let departureListItems = [];
    departureListItems.push(<li key='0'><Departure time='1830' destination='London' status='On time'/></li>)
    departureListItems.push(<li key='1'><Departure time='1845' destination='London' status='On time'/></li>)
    departureListItems.push(<li key='2'><Departure time='1900' destination='London' status='On time'/></li>)

    return (
      <div>
        <h1>Departures Board</h1>
        <ul>
          {departureListItems}
        </ul>
      </div>
    )
  }
}

export default Content 
