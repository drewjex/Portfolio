import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style.scss';
import { App } from './components/App';

// let brakePoints = [350, 500, 750];
// let images = [];
// for(let i = 1; i<50; i++){
// 	images.push("https://unsplash.it/700/350?image="+i);
// }

let breakPoints = [500, 750, 1000];
//let projects = [];
let projects = [
	{
		title: "BookTracker",
		description: "For this project, I worked directly with several employees at the University Accessibility Center to design an application that would fit their specific needs. The application provides a student portal where student can submit books for conversion and an admin portal where employees and administrators can receive requests, track book statuses, send emails, manage employees, and much more. The application is built with the Model-View-Controller architecture and implements a wide variety of javascript libraries.",
		image: require('./assets/booktracker.jpg'),
		tags: [
			"PHP",
			"Javascript",
			"MySQL"
		]
	},
	{
		title: "MusicMaker",
		description: "This is a long-term project that will enable users to listen to original music spontaneously. The project currently plays a fully-fledged piano song. This is simply a personal project that I've been doing for fun.",
		image: require('./assets/music.jpg'),
		tags: [
			"PHP"
		]
	},
	{
		title: "EventTickets",
		description: "I have worked primarily on the admin side of this site, which is heavily dependent on PHP and the MySQL database. Thousands of students and faculty have used this site, so we have to be very careful with maintainance and code quality.",
		image: require('./assets/eventtickets.jpg'),
		tags: [
			"PHP",
			"Javascript",
			"Smarty"
		]
	},
	{
		title: "Outdoors Unlimited",
		description: "I have written several versions of this site for Outdoors Unlimited at BYU. They are currently in the process of deciding their needs for the site. As a result, I have posted two implementations of the same site. This site allows users to reserve rental equipment in advance, create accounts, pay online, and view orders. The site uses a SOAP Interface to interact with the third-party reservation system. The site also uses PHP and a MySQL database to handle backend operations.",
		image: require('./assets/outdoors.jpg'),
		tags: [
			"PHP",
			"Javascript",
			"Wordpress"
		]
	},
	{
		title: "Reading Tracker",
		description: "I wrote this project while serving as a volunteer in Bangkok, Thailand. It provides a place for people to keep track of reading scriptures. Users can create accounts, check-off chapters they've read, and then compare their reading to friends. Organizations in India and Mongolia also used this website, so I wrote it to be flexible with other languages.",
		image: require('./assets/scriptureTracker.jpg'),
		tags: [
			"PHP",
			"Javascript",
			"MySQL"
		]
	},
	{
		title: ".NET Components",
		description: "This is a really cool thing I did.",
		image: require('./assets/booktracker.jpg'),
		tags: [
			"PHP",
			"Javascript",
			"MySQL"
		]
	},
	{
		title: "WPF Components",
		description: "This is a really cool thing I did.",
		image: require('./assets/booktracker.jpg'),
		tags: [
			"PHP",
			"Javascript",
			"MySQL"
		]
	},
	{
		title: "LineView",
		description: "This is a really cool thing I did.",
		image: require('./assets/booktracker.jpg'),
		tags: [
			"PHP",
			"Javascript",
			"MySQL"
		]
	},
	{
		title: "SkyTrack",
		description: "This is a really cool thing I did.",
		image: require('./assets/booktracker.jpg'),
		tags: [
			"PHP",
			"Javascript",
			"MySQL"
		]
	},
	{
		title: "The Ryde",
		description: "This is a really cool thing I did.",
		image: require('./assets/ryde.jpg'),
		tags: [
			"PHP",
			"Javascript",
			"Drupal"
		]
	}
];

// const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92,643];
// for(let i = 0; i< imgId.length; i++){
// 	const ih = 200 + Math.floor(Math.random()*10)*15;
// 	projects.push({"image":"https://unsplash.it/250/" + ih + "?image=" + imgId[i]});
// }

// for(let i = 0; i< imgId.length; i++){
// 	projects[i].title = "TEST"+i;
// }

// projects[0].title = "Book Tracker";
// projects[1].title = "Music Maker";
// projects[2].title = "Event Tickets";
// projects[3].title = "Outdoors Unlimited";
// projects[4].title = "Book of Mormon Tracker";
// projects[5].title = ".NET Projects/Framework";
// projects[6].title = "WPF Components";
// projects[7].title = "Resume";
// projects[8].title = "About Me";

// for (let i=0; i<imgId.length; i++) {
// 	projects[i].tags = [];
// 	projects[i].tags.push("React");
// 	(i % 2 == 0) ? projects[i].tags.push("Typescript") : projects[i].tags.push(".NET");
// 	(i % 3 == 0) && projects[i].tags.push("C#");
// }

ReactDOM.render(<App projects = {projects} 
                     breakPoints={breakPoints}/>, document.querySelector("#app"));
