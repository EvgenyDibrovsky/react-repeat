import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import React, { Component } from 'react';

class ModuleThree extends Component {
  render() {
    return (
      <div>
        <Section
          title="Модуль 3 Жизненный цикл компонента. Работа с REST API"
          type="dark"
        >
          <Container></Container>
        </Section>
      </div>
    );
  }
}

export default ModuleThree;
