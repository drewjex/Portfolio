import * as React from 'react';

export class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.CloseModal = this.CloseModal.bind(this);
  }

  CloseModal(event) {
    event.preventDefault();
    const masonry = document.querySelector(".container");
    const intro = document.querySelector(".intro");
    const myWork = document.querySelector(".my-work");
    const modal = document.querySelector(".modal");
    const modalBackground = document.querySelector(".modal-background");
    modal.addEventListener("transitionend", this.props.ToggleModal(this.props.id));
    modal.style.opacity = `0`;
    modalBackground.style.opacity = `0`;
    masonry.classList.remove('blur');
    intro.classList.remove('blur');
    myWork.classList.remove('blur');
  }

  render() {
    return (
      <div className="modal-background">
        <div className={"modal" + (this.props.isAboutMe ? ' modal-about-me' : '')}>
          <a href="#" 
             className="close-thick"
             onClick={this.CloseModal}/>
          <div className="text-container">
            <h2>{this.props.tile.title}</h2>
            {this.props.isAboutMe &&
              <img src={this.props.tile.image} className="about-me"/>
            }
            <p className="small-text">
              {this.props.tile.description}
            </p>
            {this.props.isAboutMe &&
              <ul className="small-text">
                <li>Email: {this.props.tile.email}</li>
                <li>Phone: {this.props.tile.phone}</li>
              </ul>
            }
            {this.props.tile.project_url != "" && this.props.tile.title != "BookTracker" &&
            <a href={this.props.tile.project_url} target='_blank' className='btn-link'>
              Go to Project
            </a>
            }
            {this.props.tile.title == "BookTracker" &&
            <a href={this.props.tile.project_url} target='_blank' className='btn-link'>
              Go to Demo
            </a>
            }
            {this.props.tile.github != "" &&
            <a href={this.props.tile.github} target='_blank' className='btn-link'>
              Git Repo
            </a>
            }
          </div>
        </div>
      </div>
    )
  }
}