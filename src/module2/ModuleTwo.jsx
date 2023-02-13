import React, { Component } from 'react';
import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Counter from './components/Counter/Counter';
import ColorPicker from './components/ColorPcker/ColorPicker';
import TodoList from './components/TodoList/TodoList';
import initialTodo from '../data/todo.json';
import initialColorPicker from '../data/colorpicker.json';

const colorPickerOption = initialColorPicker;

class ModuleTwo extends Component {
  state = {
    todos: initialTodo,
  };

  deleteTodo = todoid => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoid),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Section title="Модуль 2 События и состояние. Формы" type="white">
          <Container>
            <Counter initialValue={3} />
            <ColorPicker options={colorPickerOption} />
            <TodoList todos={todos} onDeleteTodo={this.deleteTodo}/>
          </Container>
        </Section>
      </div>
    );
  }
}

export default ModuleTwo;
