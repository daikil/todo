export const Filter = (props) => {
    // propsを定義
    const { value, onChange } = props;
    // フィルターの切り替え
    const handleClick = (key, event) => {
      event.preventDefault();
      onChange(key);
    };
    return (
      <div className="panel-tabs">
        <a
          href="#"
          onClick={handleClick.bind(null, 'ALL')}
        >All</a>
        <a
          href="#"
          onClick={handleClick.bind(null, 'TODO')}
        >ToDo</a>
        <a
          href="#"
          onClick={handleClick.bind(null, 'DONE')}
        >Done</a>
      </div>
    );
}  