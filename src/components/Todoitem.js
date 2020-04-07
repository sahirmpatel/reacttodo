import React, { Component } from 'react'
import Todos from './Todos'
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

export class Todoitem extends Component {
getStyle=()=>{
    return{
        backgroundColor: '#f4f4f4',
        padding : '5px',
        //width:'50%',
        margin:'auto',
        borderBottom: '1px #ccc dotted', 
        textDecoration: this.props.todo.completed ? "line-through " :"none",
           }
}



    render() {
        const{id,title}=this.props.todo;
        return (
            <div style={this.getStyle()}>
               
                <p><input type='checkbox' style={{marginRight:'10px'}} onChange={this.props.markComplete.bind(this, id)} />
                {' '}
                <span style={{fontSize:"25px"}}>{ title } </span>
                    
                    <Button onClick={this.props.delTodo.bind(this,id)} style={btnStyle} variant="outline-primary">Remove</Button>
                    </p>
            </div>
        )
    }
}

const btnStyle ={
    margin:"5px",
    float:'right'

}
//prop types
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default Todoitem
