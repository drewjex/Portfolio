import * as React from 'react';

export const Tile = ({title, tags, src}) => {
  return (
    <div className="tile">
			<div className="picture">
				<img src={src} />
			</div>
			<div className="details">
				<div className='title'>{title}</div>
				{tags.map((tag, id) => {
					let colorCode = `tag ${(tag === 'React') ? 'yellow' : (tag === 'Typescript') ? 'green' : 'blue'}`;
					return <div key={id} 
											className={colorCode}>{tag}</div>	
				})}
			</div>
		</div>
  );
};

export class Masonry extends React.Component{
	constructor(props){
		super(props);
		this.state = {columns: 1};
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
			<div className="masonry" ref="Masonry">
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
		)
	}
}