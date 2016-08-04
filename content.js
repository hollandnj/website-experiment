import React from 'react';
import Departure from './departure';

class Content extends React.Component {
  render() {
    let departureListItems = [];
    departureListItems.push(<li><Departure /></li>)
    departureListItems.push(<li><Departure /></li>)
    departureListItems.push(<li><Departure /></li>)
    departureListItems.push(<li><Departure /></li>)
    departureListItems.push(<li><Departure /></li>)

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
