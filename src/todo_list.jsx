var TodoItem = React.createClass({
    render: function(){
        return (<li key={this.props.key}>{this.props.children}</li>);
    }
})

var TodoItems = React.createClass({
    render: function() {
        var displayItems = this.props.items.map(function(item) {
            return (<TodoItem key={item.id}>{item.data}</TodoItem>);
            // return (<li key={item.id}>{item.data}</li>);
        });

        return (
            <div>
                <ul>
                    {displayItems}
                </ul>
            </div>
        );
    }
});

var AddTodoForm = React.createClass({
    getInitialState: function(){
        return {todoText: ""};  
    },
    handleTodoChange: function(e){
        this.setState({todoText: e.target.value});        
    },
    handleAddTodoItem: function(e){
        // console.log(this.state.todoText);
        // 如何將資料新增到TodoItems中?
        // 呼叫以props傳進來的addItem  
        this.props.addItem(this.state.todoText);
    },
    render: function() {
        return (
            <div>
                <input type="text" 
                    value={this.state.todoText} 
                    onChange={this.handleTodoChange}/>
                <button
                    onClick={this.handleAddTodoItem}>Add Todo Item</button>
            </div>
        );
    }
});

var TodoList = React.createClass({
    getInitialState: function(){
        return {
            todoItems: 
                [{ id: 1, data: "Item 1" },
                { id: 2, data: "Item 2" }]
        };
    },
    handleAddTodoItem: function(todoText){
        var items = this.state.todoItems;
        items.push({
            id: items.length + 1,
            data: todoText
        });
        this.setState({todoItems: items});
    },
    render: function() {
        return (
            <div className="todoList">
                <h1>Todo List</h1>
                <TodoItems items={this.state.todoItems}/>
                <AddTodoForm addItem={this.handleAddTodoItem}/>
            </div>
        );
    }
});

ReactDOM.render(
    <TodoList />,
    document.getElementById("content")
);
