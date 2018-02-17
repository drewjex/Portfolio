import * as React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

export class MyWork extends React.Component {
	constructor(props) {
    super(props);
    configureAnchors({offset: -120, scrollDuration: 1000})
	}
	
	render() {
		return (
      <ScrollableAnchor id={'my-work'}>
        <div className={'my-work '+ (this.props.showModal || this.props.showAboutMe ? "blur" : "")}>
          <h3>My Work</h3>
        </div>
      </ScrollableAnchor>
    )
  }
}