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
		description: "I worked directly with several employees at BYU's University Accessibility Center to personally design, develop, and deploy a robust MVC PHP/Javascript administration application. The app provides a student portal where student can submit books for conversion and an admin portal where employees and administrators can receive requests, track book statuses, send emails, manage employees, and much more. A variety of JQuery and Javascript libraries were used on the front-end, which makes ajax requests are used to save data and update the MySQL database.",
		image: require('./assets/booktracker.jpg'),
		github: "https://github.com/drewjex/BookTracker",
		project_url: "",
		tags: [
			"PHP",
			"Javascript",
			"MySQL",
			"JQuery"
		]
	},
	{
		title: "MusicMaker",
		description: "I received the ORCA research grant from Brigham Young University my senior year to work on this project with a professor. MusicMaker generates music spontaneously by analyzing musical patterns in other music. The complex song-analysis process is built in PHP and uses a Javascript MIDI library to play the song to the browser. A more detailed description of the project details can be found in the Github repo (musicmaker.pdf).",
		image: require('./assets/music1.jpg'),
		github: "https://github.com/drewjex/MusicMaker-v2",
		project_url: "",
		tags: [
			"PHP"
		]
	},
	{
		title: "EventTickets",
		description: "I have worked primarily on the admin side of this site building features that allows users to create events and manage ticketing sales. I worked primarily in PHP, Javascript, Jquery, and the Smarty framework. The site sells tickets for many big events around campus, including concerts, festivals, etc.",
		image: require('./assets/eventtickets.jpg'),
		github: "https://github.com/drewjex/event-editor",
		project_url: "https://eventtickets.byu.edu/",
		tags: [
			"PHP",
			"Javascript",
			"Smarty"
		]
	},
	{
		title: "Outdoors Unlimited",
		description: "I built this application for the popular Outdoors Unlimited store in Provo, UT. This Wordpress site integrates with a third-party SOAP interface to allow for online reservations, and uses the popular Woocommerce plugin, with modifications, to handle rental items.",
		image: require('./assets/outdoors.jpg'),
		github: "",
		project_url: "https://outdoors.byu.edu/",
		tags: [
			"PHP",
			"Javascript",
			"Wordpress"
		]
	},
	{
		title: "Reading Tracker",
		description: "I wrote this project while serving as a volunteer in Bangkok, Thailand in PHP, Javascript, and MySQL. Users can create accounts, check-off chapters they've read, and then compare their reading to friends. Organizations in India and Mongolia also requested this website, so I wrote it to be flexible with other languages.",
		image: require('./assets/scriptureTracker.jpg'),
		github: "",
		project_url: "",
		tags: [
			"PHP",
			"Javascript",
			"MySQL"
		]
	},
	{
		title: ".NET Components",
		description: "I built several custom .NET components to work better with the MVVM framework common in WPF applications. The ObservableState allows for easy assignment of event-handlers to changes in state. The TrulyObservableCollection, also on github, allows for collections of data raise notifications whenever any piece of data within the collection is changed.",
		image: require('./assets/net.jpg'),
		github: "https://github.com/drewjex/ObservableState",
		project_url: "",
		tags: [
			".NET",
			"C#"
		]
	},
	{
		title: "WPF Components",
		description: "WPF Components include a custom multi-thumb color range-slider and a collapsible datagrid component.",
		image: require('./assets/wpf.jpg'),
		github: "https://github.com/drewjex/WPFColorSliderComponent",
		project_url: "",
		tags: [
			"WPF",
			"XAML"
		]
	},
	{
		title: "LineView",
		description: "Built with ASP.NET, Javascript, C#, and SQL Server. The web application allows airplane-mechanics the ability to manage electronic aircraft records. To protect company confidentiality, the full project is unfortunately, unavailable.",
		image: require('./assets/line.jpg'),
		github: "",
		project_url: "",
		tags: [
			"ASP.NET",
			"Javascript",
			"SQL Server"
		]
	},
	{
		title: "SkyTrack",
		description: "I built several screens and front-end components for this robust Windows desktop application using .NET and WPF.",
		image: require('./assets/skytrack.jpg'),
		github: "",
		project_url: "",
		tags: [
			".NET",
			"WPF",
			"WinForms"
		]
	},
	{
		title: "The Ryde",
		description: "This site was developed in Drupal for The Ryde, the bus service that operates in south Provo. I participated in helping design and develop the front-end components to be responsive and mobile-friendly.",
		image: require('./assets/ryde.jpg'),
		github: "",
		project_url: "http://www.studentmovement.com/",
		tags: [
			"PHP",
			"Javascript",
			"Drupal"
		]
	},
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
