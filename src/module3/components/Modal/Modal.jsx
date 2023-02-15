import s from './Modal.module.css';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = event => {
    // console.log('Бэкдроп');

    // console.log('currentTarget', event.currentTarget);
    // console.log('target', event.target);

    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  
  render() {
    return createPortal(
      <div className={s.modalBackdrop} onClick={this.handleBackdropClick}>
        <div className={s.modaContact}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
