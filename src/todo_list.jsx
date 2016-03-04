var TodoItems = React.createClass({
  getInitialState: function(){
    var items = [
      { id: 1, text: "Learn React."},
      { id: 2, text: "Build todo list practice."}
    ];
    return {data: items};
  },
  render: function() {
    var items = this.state.data.map(function(item) {
      return (
        <li key={item.id}>
          {item.text}
        </li>
      );
    });
    return (
      <ul className="todoItems">
        {items}
      </ul>
    );
  }
});

var TodoList = React.createClass({
  render: function(){
    return(
      <div className="todoList">
        <TodoItems />
      </div>
    );
  }
});

ReactDOM.render(
  <div className="todoList">
    <h1>ToDo List</h1>
    <TodoList />
  </div>,
  document.getElementById("content")
);
