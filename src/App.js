import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
//import logo from './logo.svg';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import Add from './components/Add'
import * as uuid from 'uuid';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/pages/About';
import { Spinner, Container } from "react-bootstrap";

class App extends React.Component {
  
  state = {
    todos:[
        {
            id: uuid.v4(), 
            title : 'task 1',
            completed : false
        },
        {
            id: uuid.v4() , 
            title : "task 2",
            completed : false
        },
        {
            id: uuid.v4(), 
            title : "Task 3",
            completed : false
        },
    
    ]
}




//toggle line through
markComplete=(id)=>{
  this.setState({todos: this.state.todos.map(todo=>{
    if(todo.id === id){
      todo.completed = !todo.completed;
    }
    return todo;
  })})
}
//Delete todo
delTodo=(id)=>{
  this.setState({todos:[...this.state.todos.filter(todo=>todo.id !== id)]})
}
//Add todo
addTodo=(title)=>{
  const newTodo={
    id:uuid.v4(),
    title,
    completed:false
  }
  this.setState({ todos: [...this.state.todos,newTodo]});
}


  render(){   
  
    return (
      <Router>
    <div className="App">
    <div className="container">
<Container >
<Header/>
<Route exact path='/' render={props=>(
        <React.Fragment>
            

            <Add addTodo={this.addTodo} />
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} /> 
        </React.Fragment>
      )} />
      <Route path="/about" component={About} />
</Container>
    
      
      
    </div>   
    </div>
    </Router>
  );
  }
}

export default App;
