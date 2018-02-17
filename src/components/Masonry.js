import * as React from 'react';
import { Modal } from './Modal';

export class Tile extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="tile"
					 onClick={this.props.ToggleModal.bind(this, this.props.ID)}>
				<div className="picture">
					<img src={this.props.src} />
				</div>
				<div className="details">
					<p>
						<span>{this.props.title}</span>
						{this.props.tags.map((tag, id) => {
							let colorCode = `tag ${(tag === 'React') ? 'yellow' : (tag === 'Typescript') ? 'green' : 'blue'}`;
							return <span key={id} 
													className={colorCode}>{tag}</span>	
						})}
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
		this.onResize = this.onResize.bind(this);
	}
	componentDidMount(){
		this.onResize();
		window.addEventListener('resize', this.onResize)
	}
	
	getColumns(w){
		return this.props.breakPoints.reduceRight( (p, c, i) => {
			return c < w ? p : i;
		}, this.props.breakPoints.length) + 1;
	}
	
	onResize(){
		const columns = this.getColumns(this.refs.Masonry.offsetWidth);
		if(columns !== this.state.columns){
			this.setState({columns: columns});	
		}
		
	}
	
	mapChildren(){
		let col = [];
		const numC = this.state.columns;
		for(let i = 0; i < numC; i++){
			col.push([]);
		}
		return this.props.children.reduce((p,c,i) => {
			p[i%numC].push(c);
			return p;
		}, col);
	}
	
	render(){
		return (
			<div>
				{this.props.showModal &&
 					<Modal ToggleModal={this.props.ToggleModal} 	
					 			 isAboutMe={this.props.isAboutMe}	
								 image={this.props.image}			 			 
					 			 tile={this.props.selectedTile}/>
				}
				<div className={"masonry " + (this.props.showModal || this.props.showAboutMe ? "blur" : "")} ref="Masonry">
					{this.mapChildren().map((col, ci) => {
						return (
							<div className="column" key={ci} >
								{col.map((child, i) => {
									return <div key={i} className='tile-container'>{child}</div>
								})}
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}