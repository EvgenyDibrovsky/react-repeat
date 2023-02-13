import s from './TodoList.module.css';

const TodoList = ({ todos }) => {
  return (
    <ul className={s.todolist}>
      {todos.map(({ id, text }) => (
        <li className={s.listItem} key={id}>
          <p className={s.textList}>{text}</p>
          <button className={s.todoDelBtn}> - </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
