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
		description: "I worked directly with several employees at BYU's University Accessibility Center to personally design, develop, and deploy a robust MVC PHP/Javascript administration application. The app provides a student portal where students can submit books for conversion and an admin portal where employees and administrators can receive requests, track book statuses, send emails, manage employees, and much more. A variety of JQuery and Javascript libraries were used on the front-end, which make ajax requests to save data and update the MySQL database. To comply with student protections under FERPA law, only an incomplete demo site is available for viewing.",
		image: require('./assets/booktracker.jpg'),
		github: "https://github.com/drewjex/BookTracker",
		project_url: "http://drewjex.x10host.com/booktracker/",
		tags: [
			"JavaScript",
			"JQuery",
			"MySQL",
			"PHP"
		]
	},
	{
		title: "MusicMaker",
		description: `My senior year at BYU, I received an ORCA research grant to develop this computational-creativity project under the mentorship of Professor Dan Ventura.		
		MusicMaker generates music spontaneously by analyzing musical patterns in other music. 
		The complex song-analysis process is built in PHP and uses a Javascript MIDI library to play the song to the browser. 
		A more detailed description of the project details can be found in the Github repo (musicmaker.pdf).`,
		image: require('./assets/music1.jpg'),
		github: "https://github.com/drewjex/MusicMaker-v2",
		project_url: "http://drewjex.x10host.com/musicmaker/client/",
		tags: [
			"JavaScript",
			"PHP"
		]
	},
	{
		title: "EventTickets",
		description:`While employed at BYU, I worked on the admin side of this site, including creating features to allow users to broadcast their own events and manage ticket sales. Developed primarily in PHP, Javascript, Jquery, and the Smarty framework, this site is used to sell tickets for many big events and programs around campus, including concerts, festivals, etc.`,
		image: require('./assets/tech6.jpg'), //require('./assets/eventtickets.jpg'),
		github: "https://github.com/drewjex/event-editor",
		project_url: "https://eventtickets.byu.edu/",
		tags: [
			"JavaScript"
		]
	},
	{
		title: "Outdoors Unlimited",
		description: `While employed at BYU, I built this application for the popular Outdoors Unlimited store in Provo, UT. This Wordpress site integrates with a third-party SOAP interface to allow for online reservations, and uses the Woocommerce plugin (with modifications) to handle rental items.`,
		image: require('./assets/outdoors.jpg'),
		github: "",
		project_url: "https://outdoors.byu.edu/",
		tags: [
			"JavaScript",
			"PHP"
		]
	},
	{
		title: "Reading Tracker",
		description: "I wrote this project while serving as a volunteer in Bangkok, Thailand. It is written in PHP, Javascript, and uses a MySQL database. Users can create accounts, check-off chapters they've read, and then compare their reading to friends. Organizations in India and Mongolia also requested this website, so I wrote it to be flexible with other languages.",
		image: require('./assets/scriptureTracker.jpg'),
		github: "",
		project_url: "",
		tags: [
			"JavaScript",
			"PHP",
			"MySQL"
		]
	},
	{
		title: ".NET Components",
		description: `While employed at SkyWest, I built several custom .NET components to work better with the MVVM framework common in WPF applications. The ObservableState allows for easy assignment of event-handlers to changes in state. The TrulyObservableCollection, also on github, allows for data-collections to raise notifications whenever any piece of data within the collection is changed.`,
		image: require('./assets/tech4.jpg'),//'https://unsplash.it/750/750?image=0', //require('./assets/net.jpg'),
		github: "https://github.com/drewjex/ObservableState",
		project_url: "",
		tags: [
			".NET",
			"C#"
		]
	},
	{
		title: "WPF Components",
		description: `While employed at SkyWest, I designed various original WPF components. Two of my favorites include a custom multi-thumb color range-slider and a collapsible datagrid component.`,
		image: require('./assets/tech5.jpg'),
		github: "https://github.com/drewjex/WPFColorSliderComponent",
		project_url: "",
		tags: [
			"WPF",
			"XAML"
		]
	},
	{
		title: "LineView",
		description: `Built with ASP.NET, Javascript, C#, and SQL Server, this web application allows airplane-mechanics the ability to manage electronic aircraft records. To protect company confidentiality, the full project is unfortunately, unavailable. My role in this project has included consulting and development. Please feel free to ask me more.`,
		image: require('./assets/line.jpg'),
		github: "",
		project_url: "",
		tags: [
			"JavaScript",
			"ASP.NET",
			"SQL Server"
		]
	},
	{
		title: "SkyTrack",
		description: `I built several screens and front-end components for this robust Windows desktop application using .NET and WPF. To protect company confidentiality, the full project is unfortunately, unavailable. My role in this project has included consulting and development. Please feel free to ask me more.`,
		image: require('./assets/skytrack.jpg'),
		github: "",
		project_url: "",
		tags: [
			".NET",
			"WPF"
		]
	},
	{
		title: "The Ryde",
		description: `While employed with BYU, I developed this site in Drupal for The Ryde (a bus service that operates in South Provo). I participated in helping develop and design the front-end components to be responsive and mobile-friendly.`,
		image: require('./assets/ryde.jpg'),
		github: "",
		project_url: "http://www.studentmovement.com/",
		tags: [
			"JavaScript"
		]
	},
];

let resumeFile = require('./assets/resume.pdf');

let aboutMe = {
	title: "About Me!",
	image: require('./assets/me2.JPG'),
	description: `I love learning and I love creating. I am passionate about building rich user experiences using the most recent web technologies. I am an avid tennis player and I enjoy being outside. I love music and playing the piano. My family is most important to me. Say hi to me @ drewjex28@gmail.com.`,
	github: "",
	project_url: ""
};

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
										 aboutMe={aboutMe}
										 resume={resumeFile}
                     breakPoints={breakPoints}/>, document.querySelector("#app"));
