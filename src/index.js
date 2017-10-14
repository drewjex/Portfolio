import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style.scss';
import { App } from './components/App';

// let brakePoints = [350, 500, 750];
// let images = [];
// for(let i = 1; i<50; i++){
// 	images.push("https://unsplash.it/700/350?image="+i);
// }

let breakPoints = [350, 500, 750];
let projects = [];
// let projects = [
// 	{
// 		title: "BookTracker",
// 		image: require('./assets/IMG_7698.JPG')
// 	},
// 	{
// 		title: "BookTracker",
// 		image: require('./assets/IMG_7698.JPG')
// 	},
// 	{
// 		title: "BookTracker",
// 		image: require('./assets/IMG_7698.JPG')
// 	},
// 	{
// 		title: "BookTracker",
// 		image: require('./assets/IMG_7698.JPG')
// 	},
// 	{
// 		title: "BookTracker",
// 		image: require('./assets/IMG_7698.JPG')
// 	},
// 	{
// 		title: "BookTracker",
// 		image: require('./assets/IMG_7698.JPG')
// 	},
// 	{
// 		title: "BookTracker",
// 		image: require('./assets/IMG_7698.JPG')
// 	}
// ];
const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92,643];
for(let i = 0; i< imgId.length; i++){
	const ih = 200 + Math.floor(Math.random()*10)*15;
	projects.push({"image":"https://unsplash.it/250/" + ih + "?image=" + imgId[i]});
}

// for(let i = 0; i< imgId.length; i++){
// 	projects[i].title = "TEST"+i;
// }

projects[0].title = "Book Tracker";
projects[1].title = "Outdoors Unlimited";
projects[2].title = "Event Tickets";
projects[3].title = "Music Maker";
projects[4].title = "Book of Mormon Tracker";
projects[5].title = ".NET Projects/Framework";
projects[6].title = "WPF Components";
projects[7].title = "Resume";
projects[8].title = "About Me";

ReactDOM.render(<App projects = {projects} 
                     breakPoints={breakPoints}/>, document.querySelector("#app"));
