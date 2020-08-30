import React from 'react';

export default function StarShipData(props) {
  return (
    <div>
      <div>
        Model: {props.location.state.model}
      </div>
      <div>
        Name: {props.location.state.model}
      </div>
    </div>
  )
}
