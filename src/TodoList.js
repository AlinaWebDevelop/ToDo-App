import { Component } from "react";
import check from './star.png';

export class TodoList extends Component {
    
    state = {
        userInput: "",
        todoList: []
    }

    handleChange (e) {
       this.setState ({userInput:e}); 

    }

    addItem(input) {
        if (input==="") {
            alert("Please add the item!")
        }else {
        let listArray = this.state.todoList;
        listArray.push(input);
        this.setState ({todoList: listArray, userInput:""});
        }
    }

    crossedWord (event) {
        const list=event.target;
        list.classList.toggle('crossed');
    }

    deleteItem () {
        let listArray = this.state.todoList;
        listArray =[];
        this.setState({todoList: listArray})
    }

    onFormSubmit (e) {
        e.preventDefault();
    }

    render () {
        return <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
            <input type="text" 
            placeholder="What do you have to do?" 
            onChange = {(e) => {this.handleChange(e.target.value)}}
            value = {this.state.userInput}/>
            <button onClick= {()=> this.addItem(this.state.userInput)} className="btn add">Add</button>
            </div>

            <ul>
                {this.state.todoList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                        <img src={check} width="30px" alt="thumb up"/>
                        {item}</li>
                )
                )}
            </ul>

            <div className="container">
            <button onClick= {()=> this.deleteItem(this.state.userInput)} className="btn delete">Delete</button>
            </div>
            </form>
        </div>
        
    }
}