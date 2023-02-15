import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import React, { Component } from 'react';
import Modal from './components/Modal/Modal';
import s from './components/Modal/Modal.module.css';

class ModuleThree extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <Section
          title="Модуль 3 Жизненный цикл компонента. Работа с REST API"
          type="dark"
        >
          <button
            type="button"
            onClick={this.toggleModal}
            className={s.modalBtn}
          >
            Открыть модалку
          </button>
          <Container>
            {showModal && (
              <Modal onClose={this.toggleModal}>
                <h2>Контент модалки как children</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  illum ex exercitationem distinctio quaerat doloremque sapiente
                  ullam odio optio amet hic reprehenderit aliquam, architecto
                  eveniet nobis mollitia quis aperiam necessitatibus.
                </p>
                <button
                  type="button"
                  onClick={this.toggleModal}
                  className={s.modalBtn}
                >
                  Закртыть
                </button>
              </Modal>
            )}
          </Container>
        </Section>
      </div>
    );
  }
}

export default ModuleThree;
