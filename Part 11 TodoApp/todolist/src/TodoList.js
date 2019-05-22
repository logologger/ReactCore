import React , {Component} from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.delete = this.delete.bind(this);

        this.state = {
            "items":[]
        };


    }

    delete(key) {

        var leftItems = this.state.items.filter ( item => {
           return item.key !== key
        })

        this.setState({
            items : leftItems
        })
    }

    addItem(e) {

        var itemArray = this.state.items;

        if(this._inputElement.value !== '') {
            itemArray.unshift({
                text: this._inputElement.value,
                key:Date.now()
            });

            this.setState({
                items:itemArray
            });
    
            this._inputElement.value = '';
        }

       

        e.preventDefault();

    }
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input placeholder="enter task" ref = { (a) => this._inputElement = a }>
                        </input>
                        <button type="submit">
                            Add
                        </button>
                    </form>
                </div>
                <TodoItem enteries = {this.state.items}  deleteItem = {this.delete }/>
            </div>
        )
    }
}

export default TodoList;