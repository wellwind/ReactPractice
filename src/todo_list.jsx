var TodoItems = React.createClass({
  render: function() {
    var items = this.props.items.map(function(item) {
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

var AddTodoForm = React.createClass({
  getInitialState: function(){
    return {todoText: ""};
  },
  handleAddTodo: function(e){
    if(this.state.todoText !== ""){
      this.props.addItem(this.state.todoText);
      this.setState({todoText: ""});
    }
  },
  handleAddTodoTyping: function(e){
    var name = e.target.name
    var value = e.target.value;
    var obj={};
    obj[name] = value;
    this.setState(obj);
  },
  render: function(){
    return (
      <div classNam="addTodoForm">
        <div>
          Todo item:
          <input type="text" name="todoText" value={this.state.todoText}
            onChange={this.handleAddTodoTyping}></input>
          <button
            onClick={this.handleAddTodo}
            disabled={this.state.todoText === "" ? "disabled" : ""}>Add</button>
        </div>
      </div>
    );
  }
});

var TodoList = React.createClass({
  getInitialState: function(){
    var items = [
      { id: 1, text: "Learn React."},
      { id: 2, text: "Build todo list practice."}
    ];
    return {items: items};
  },
  addTodoItem: function(item){
    this.state.items.push({
      id: new Date(),
      text: item
    });
    this.setState({items: this.state.items});
  },
  render: function(){
    return(
      <div className="todoList">
        <TodoItems items={this.state.items}/>
        <AddTodoForm addItem={this.addTodoItem}/>
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
