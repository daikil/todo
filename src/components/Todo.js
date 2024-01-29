export const ToDo = (props) => {
    // stateを作成
    const { todo, onCheck } = props;
    // チェックボックス押下時、ToDoAppクラスの「handleCheck」関数を実行
    const handleChange = () => {
      onCheck(todo);
    };
    return (
      <label className="panel-block">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={handleChange}
        />
        <span>
          {todo.text}
        </span>
      </label>
    );
  }
  