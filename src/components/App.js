import * as React from 'react';
import { Masonry, Tile } from './Masonry';
import { Intro } from './Intro';
import { MyWork } from './MyWork';
import { Loading } from './Loading';

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			showAboutMe: false,
			selectedIndex: 0,
			selectedTile: {},
			loading:true,
			isLoadingPics: true
		}
		this.ToggleModal = this.ToggleModal.bind(this);
		this.ToggleAboutMe = this.ToggleAboutMe.bind(this);
		this.handleLoad = this.handleLoad.bind(this);
	}

	ToggleModal(id, event) {
	  this.setState({
			showModal: !this.state.showModal,
			showAboutMe: false,
			selectedIndex: id,
			selectedTile: this.props.projects[id]
		})
	}

	ToggleAboutMe() {
		this.setState({
			showAboutMe: true,
			showModal: !this.state.showModal,
			selectedTile: this.props.aboutMe
		})
	}

	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
	}

	handleLoad(event) {
		this.setState({isLoadingPics: false});
		const loading = document.querySelector('.loading');
		const content = document.querySelector('.content');
		setTimeout(() => content.style.visibility = `visible`,500);
		setTimeout(() => {
			loading.classList.add('hidden-vis');	
		},1000);
	}

  render(){
		return (
			<div className="container">
				<Loading />
				<div className='content' style={{visibility:'hidden'}}> 
					<div className="buttons">
						<a href={this.props.resume} target='_blank' className="btn">
							Resume
						</a>
						<a href='https://github.com/drewjex' target='_blank' className="btn">
							GitHub
						</a>
						<p className='btn blue djfull my-name' onClick={this.ToggleAboutMe}>
							Drew Jex
						</p>
						<p className='btn blue djabv my-name hidden' onClick={this.ToggleAboutMe}>
							DJ
						</p>
						<a href='https://linkedin.com/in/drewjex' target='_blank' className="btn lifull">
							LinkedIn
						</a>
						<a href='https://linkedin.com/in/drewjex' target='_blank' className="btn liabv hidden">
							LI
						</a>
						<a href='https://stackoverflow.com/users/8060919/drew-jex' target='_blank' className="btn sofull">
							Stack Overflow
						</a>
						<a href='https://stackoverflow.com/users/8060919/drew-jex' target='_blank' className="btn soabv hidden">
							SO
						</a>
					</div>
					<Intro isAboutMe={this.state.showAboutMe}
								 showModal={this.state.showModal}
								 ToggleAboutMe={this.ToggleAboutMe} />
					<MyWork isAboutMe={this.state.showAboutMe}
									showModal={this.state.showModal}/>
					<div className="masonry-container">
					{!this.state.isLoadingPics &&
						<Masonry ref="Masonry" 
										breakPoints={this.props.breakPoints}
										ToggleModal={this.ToggleModal}
										ToggleAboutMe={this.ToggleAboutMe}
										isAboutMe={this.state.showAboutMe}
										aboutMe={this.props.aboutMe}
										showModal={this.state.showModal}
										selectedTile={this.state.selectedTile}>
							{this.props.projects.map((project, id) => {
								return (
									<Tile key={id}
										ID={id}
										ToggleModal={this.ToggleModal}
										title={project.title}
										shortDescription={project.shortDescription}
										tags={project.tags}
										src={project.image} />
								) 
							})}
						</Masonry>
					}
					</div>
					<div className='footer-container'>
						<div className="footer">
							This site was built with <b>React</b> and is hosted with <b>Netlify</b>.
						</div>
					</div>
				</div>
			</div>
		)
	}
}