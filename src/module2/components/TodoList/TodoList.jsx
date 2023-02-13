import s from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo }) => {
  const TotalTodoCount = todos.length;
  const completedTodosCount = todos.reduce(
    (total, todo) => (todo.completed ? total + 1 : total),
    0
  );
  const unCompletedTodosCount = todos.reduce(
    (total, todo) => (!todo.completed ? total + 1 : total),
    0
  );

  return (
    <div className={s.todo}>
      <h2 className={s.listTitle}>ToDo</h2>
      <p className={s.listCount}>
        Общее количество:<span className={s.totalCount}>{TotalTodoCount} </span>
      </p>
      <p className={s.listCount}>
        Количество выполненных:
        <span className={s.completedCount}>{completedTodosCount}</span>
      </p>
      <p className={s.listCount}>
        Количество не выполненных:
        <span className={s.unCompletedCount}>{unCompletedTodosCount}</span>
      </p>
      <ul className={s.todolist}>
        {todos.map(({ id, text }) => (
          <li key={id} className={s.listItem}>
            <p className={s.textList}>{text}</p>
            <button onClick={() => onDeleteTodo(id)} className={s.todoDelBtn}>
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
