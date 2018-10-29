import * as React from 'react';
import { Modal } from './Modal';

export class Tile extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {		
		return (
			<div className="card" onClick={this.props.ToggleModal.bind(this, this.props.ID)}>
			<div className="card__image" style={{backgroundImage: `url(${this.props.src})`}} />
			{/*<div className="card__image">
				<img src={this.props.src} />
		</div>*/}
			<div className="card__content">
				<div className="card__title">{this.props.title}</div>
				<p className="card__text">{this.props.tags.map((tag, id) => {
					let colorCode = `tag ${(tag === 'React') ? 'yellow' : (tag === 'Typescript') ? 'green' : 'blue'}`;
					return <span key={id} className={colorCode}>{tag}</span>	
				})}
				</p>
				<p className="card__text text__content">
					{this.props.shortDescription}
				</p>
			</div>
		</div>
		);
	}
};

export class Masonry extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			columns: 1
		};
	}

	onResize(){
		const columns = this.getColumns(this.refs.Masonry.offsetWidth);
		if(columns !== this.state.columns){
			this.setState({columns: columns});	
		}
		
	}

	render() {
		return (
			<div>
					{this.props.showModal &&
							<Modal ToggleModal={this.props.ToggleModal} 	
										isAboutMe={this.props.isAboutMe}	
										image={this.props.image}			 			 
										tile={this.props.selectedTile}/>
					}
					<ul className={"cards "+ (this.props.showModal || this.props.showAboutMe ? "blur" : "")} ref="Masonry">
						{this.props.children.map((child, id) => {
							return (
								<li className="cards__item" key={id}>
									{child}
								</li>
							)
						})}
					</ul>
			</div>
		)
	}
}