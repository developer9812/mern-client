import React from 'react';
import TodoItem from './TodoItem'

class TodoList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.onTodoStatusChange = this.onTodoStatusChange.bind(this);
    }

    render()
    {
        let todoList = this.props.todos.map((todo, index) => {
            return <TodoItem key={index} todo={todo} onStatusChange={ this.onTodoStatusChange.bind(this, index) }  />
        });
        return (
            <div>
                <ul className="todo-list">
                    {todoList}
                </ul>
            </div>
        );
    }

    onTodoStatusChange(id, value)
    {
        console.log('from todo list');
        console.log(value);
        this.props.changeStatus(id, value);
    }
}

export default TodoList;