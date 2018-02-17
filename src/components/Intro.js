import * as React from 'react';
import portrait from '../assets/portrait-picture-min.png';

export class Intro extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		var TxtRotate = function(el, toRotate, period) {
				this.toRotate = toRotate;
				this.el = el;
				this.loopNum = 0;
				this.period = parseInt(period, 10) || 2000;
				this.txt = '';
				this.tick();
				this.isDeleting = false;
		};

		TxtRotate.prototype.tick = function() {
			var i = this.loopNum % this.toRotate.length;
			var fullTxt = this.toRotate[i];

			if (this.isDeleting) {
				this.txt = fullTxt.substring(0, this.txt.length - 1);
			} else {
				this.txt = fullTxt.substring(0, this.txt.length + 1);
			}

			this.el.innerHTML = '<span class="wrap blue-color ">'+this.txt+'</span>';

			var that = this;
			var delta = 200 - Math.random() * 100;

			if (this.isDeleting) { delta /= 2; }

			if (!this.isDeleting && this.txt === fullTxt) {
				delta = this.period;
				this.isDeleting = true;
				this.el.querySelector(".wrap").style.animationDuration = '.75s';
				this.el.querySelector(".wrap").style.animationIterationCount = 'infinite';
				//enable flashing cursor
			} else if (this.isDeleting && this.txt === '') {
				this.isDeleting = false;
				this.loopNum++;
				delta = 500;
				//this.el.querySelector(".wrap").style.animationDuration = '0s';
			}

			setTimeout(function() {
				that.tick();
			}, delta);
		};

		var elements = document.getElementsByClassName('txt-rotate');
		for (var i=0; i<elements.length; i++) {
			var toRotate = ['Coder.', "Designer.", "Creator."];
			var period = 3000;
			if (toRotate) {
				new TxtRotate(elements[i], toRotate, period);
			}
		}
	}
	
	render() {
		return (
      <div className={'intro '+(this.props.showModal || this.props.showAboutMe ? "blur" : "")}>
				<img src={portrait} />
				<div className='item'>
					<div className='row'>
						<h1>I am a </h1><h1 className='txt-rotate'></h1>
						{/* <h1>Designer</h1>
						<h1>Creator</h1> */}
					</div>
					<div className='row'>
						<p>Software Architect specializing in rich UI design and functional user experiences.</p>
					</div>
					<div className='row'>
						<p>Linux is my favorite, but I'm flexible. Big fan of JavaScript (ES6+).</p>
					</div>
					<div className='row'>
						<p>Love to learn, love to code, and play some tennis on the side.</p>
					</div>
					<div className='row'>
						<a className='btn-link' href='#my-work'>See My Work</a>
						<a className='btn-link' onClick={this.props.ToggleAboutMe}>Contact Me</a>
					</div>
				</div>
			</div>
    )
  }
}