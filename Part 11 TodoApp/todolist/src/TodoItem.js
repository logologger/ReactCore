import React , {Component} from 'react';
import  FlipMove  from 'react-flip-move';

class TodoItem extends Component {

    constructor(props) {
        super(props);

        this.createTask = this.createTask.bind(this);
        this.delete = this.delete.bind(this);

    }

    delete(key) {
        this.props.deleteItem(key);
    }

    createTask(todo) {
        return <li key={todo.key} onClick = { () => this.delete(todo.key) }>{todo.text}</li>
    }
    render() {
        var todoEnteries = this.props.enteries;
        var listItems =  todoEnteries.map(todo => this.createTask(todo));
        return (
            <ul className="theList">
            <FlipMove duration = {250} easing = "ease-out">
                { listItems }        
            </FlipMove>
            </ul>
        )
    }
}

export default TodoItem;