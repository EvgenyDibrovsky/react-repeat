import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Box from '../components/Box/Box';
import React, { Component } from 'react';
import Modal from './components/Modal/Modal';
import s from './components/Modal/Modal.module.css';
import Clock from './components/Clock/Clock';

class ModuleFour extends Component {
  render() {
    const { showModal } = this.state;
    return (
      <div>
        <Section
          title="Модуль 3 Хуки"
          type="light"
        >
          <Container>
            <Box>
             
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

export default ModuleFour;
