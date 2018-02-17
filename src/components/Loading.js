import * as React from 'react';

export class Loading extends React.Component {
	constructor(props) {
    super(props);
	}
	
	render() {
		return (
      <div className='loading'>
        <div className="spinner">
          <div className="cube1"></div>
          <div className="cube2"></div>
        </div>
      </div>
    )
  }
}