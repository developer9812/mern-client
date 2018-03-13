import React from 'react';

class TodoItem extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render()
    {
        return (
            <li>
                <div className="todo-item">
                    <span className={this.props.todo.done ? 'todo-done': ''}>{this.props.todo.text}</span>
                </div>
                <div className="todo-item-check">
                    <input type="checkbox" value={this.props.todo.done} onChange={this.handleInputChange} />
                </div>
            </li>
        );
    }

    handleInputChange(event)
    {
        console.log(event.target.checked);
        this.props.onStatusChange(event.target.checked);
    }
}

export default TodoItem;