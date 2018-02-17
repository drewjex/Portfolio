import * as React from 'react';
import portrait from '../assets/portrait-picture-min.png';

export class Intro extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
      <div className={'intro '+(this.props.showModal || this.props.showAboutMe ? "blur" : "")}>
				<img src={portrait} />
				<div className='item'>
					<div className='row'>
						<h1>&lt;Coder&gt;</h1>
						<h1>Designer</h1>
						<h1>Creator</h1>
					</div>
					<div className='row'>
						<p>JavaScript Architect specializing in rich user design and awesome front-end experiences.</p>
					</div>
					<div className='row'>
						<p>Yeah baby. You better believe it. Seriously, just believe it right now.</p>
					</div>
					<div className='row'>
						<p>Oh yeah, and I love tennis.</p>
					</div>
					<div className='row'>
						<a className='btn-link' href='#my-work'>See My Work &darr;</a>
					</div>
				</div>
			</div>
    )
  }
}