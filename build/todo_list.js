var TodoItems = React.createClass({
  displayName: "TodoItems",

  render: function () {
    return React.createElement(
      "div",
      null,
      "我是TodoItems"
    );
  }
});

var AddTodoForm = React.createClass({
  displayName: "AddTodoForm",

  render: function () {
    return React.createElement(
      "div",
      null,
      "我用來增加TodoItem"
    );
  }
});

var TodoList = React.createClass({
  displayName: "TodoList",

  render: function () {
    return React.createElement(
      "div",
      { className: "todoList" },
      React.createElement(
        "h1",
        null,
        "我是一個TodoList容器"
      ),
      React.createElement(
        "h2",
        null,
        "我組合了TodoItems以及AddTodoForm兩個元件"
      ),
      React.createElement(TodoItems, null),
      React.createElement(AddTodoForm, null)
    );
  }
});

ReactDOM.render(React.createElement(TodoList, null), document.getElementById("content"));