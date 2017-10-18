import * as React from 'react';
import { Masonry, Tile } from './Masonry';


export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			selectedIndex: 0,
			selectedTile: {}
		}
		this.ToggleModal = this.ToggleModal.bind(this);
	}

	ToggleModal(id, event) {
	  this.setState({
			showModal: !this.state.showModal,
			selectedIndex: id,
			selectedTile: this.props.projects[id]
		})
	}

  render(){
		return (
			<div className="container">
				<div className="buttons">
					<a href='../src/assets/resume.pdf' target='_blank' className="btn">
						Resume
					</a>
					<a href='https://github.com/drewjex' target='_blank' className="btn">
						GitHub
					</a>
					<p className='btn blue djfull'>
						Drew Jex
					</p>
					<p className='btn blue djabv hidden'>
						DJ
					</p>
					<a href='https://linkedin.com/in/drewjex' target='_blank' className="btn lifull">
						Linked In
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
			</div>
		)
	}
}