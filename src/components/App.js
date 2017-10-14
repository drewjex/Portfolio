import * as React from 'react';
import { Masonry, Tile } from './Masonry';


export class App extends React.Component {
  render(){
		return (
			<div className="container">
				<p>Drew Jex</p>
				<div className="masonry-container">
					<Masonry breakPoints={this.props.breakPoints}>
						{this.props.projects.map((project, id) => {
							return (
								<Tile key={id}
											title={project.title}
                      src={project.image} />
							) 
						})}
					</Masonry>
				</div>
			</div>
		)
	}
}