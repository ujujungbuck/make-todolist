import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">To do for today</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
