import * as React from 'react';

export class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.CloseModal = this.CloseModal.bind(this);
  }

  CloseModal(event) {
    event.preventDefault();
    const masonry = document.querySelector(".masonry");
    const modal = document.querySelector(".modal");
    const modalBackground = document.querySelector(".modal-background");
    modal.addEventListener("transitionend", this.props.ToggleModal.bind(this, this.props.title));
    modal.style.opacity = `0`;
    modalBackground.style.opacity = `0`;
    masonry.classList.remove('blur');
  }

  render() {
    return (
      <div className="modal-background">
        <div className="modal">
          <a href="#" 
             className="close-thick"
             onClick={this.CloseModal}/>
          <div className="text-container">
            <h2>{this.props.tile.title}</h2>
            <p>
              {this.props.tile.description}
            </p>
            <a className='btn-link'>
              Go to Project
            </a>
            <a className='btn-link'>
              Git Repo
            </a>
          </div>
        </div>
      </div>
    )
  }
}