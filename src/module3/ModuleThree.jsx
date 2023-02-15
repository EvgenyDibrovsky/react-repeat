import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Box from '../components/Box/Box';
import React, { Component } from 'react';
import Modal from './components/Modal/Modal';
import s from './components/Modal/Modal.module.css';
import Clock from './components/Clock/Clock';

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
          <Container>
            <Box>
              <button
                type="button"
                onClick={this.toggleModal}
                className={s.modalBtn}
              >
                Открыть модалку
              </button>
              {showModal && (
                <Modal onClose={this.toggleModal}>
                  <h2>Контент модалки как children</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    illum ex exercitationem distinctio quaerat doloremque
                    sapiente ullam odio optio amet hic reprehenderit aliquam,
                    architecto eveniet nobis mollitia quis aperiam
                    necessitatibus.
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
            </Box>
            <Box>
              <Clock />
            </Box>
          </Container>
        </Section>
      </div>
    );
  }
}

export default ModuleThree;
