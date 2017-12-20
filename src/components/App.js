import * as React from 'react';
import { Masonry, Tile } from './Masonry';

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			showAboutMe: false,
			selectedIndex: 0,
			selectedTile: {}
		}
		this.ToggleModal = this.ToggleModal.bind(this);
		this.ToggleAboutMe = this.ToggleAboutMe.bind(this);
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

  render(){
		return (
			<div className="container">
				<div className="buttons">
					<a href={this.props.resume} target='_blank' className="btn">
						Resume
					</a>
					<a href='https://github.com/drewjex' target='_blank' className="btn">
						GitHub
					</a>
					<p className='btn blue djfull' onClick={this.ToggleAboutMe}>
						Drew Jex
					</p>
					<p className='btn blue djabv hidden' onClick={this.ToggleAboutMe}>
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
				{/* <p>Drew Jex</p> */}
				<div className="masonry-container">
					<Masonry breakPoints={this.props.breakPoints}
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
											tags={project.tags}
                      src={project.image} />
							) 
						})}
					</Masonry>
				</div>
				<div className='footer-container'>
					<div className="footer">
						This site was built with <b>React</b> and is hosted with <b>Netlify</b>.
					</div>
				</div>
			</div>
		)
	}
}