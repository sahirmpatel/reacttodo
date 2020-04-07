import React, { Component} from 'react'
import { Form, Button} from "react-bootstrap";
export class Add extends Component {
    state={
        title:''
    }

    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);

        this.setState({title:''});
    }

    onChange=(e)=>this.setState({ [e.target.name]: e.target.value})
    render() {
        return (

            <React.Fragment>
                <form onSubmit={this.onSubmit}>
                <Form.Group  controlId="formBasicEmail" style={{display: 'flex'}}>
    
    <Form.Control   type="text" style={{flex:'9',marginRight:'5px'}} name='title' placeholder="Enter New ToDo.." value={this.state.title}
                    onChange={this.onChange}/>
    <Button variant="primary" style={{flex:'1'}} type="submit">
    Add
  </Button>
    
  </Form.Group>
                </form>

               


  
  
  
            </React.Fragment>

            /////////////////////////////////////////
                
            
        )
    }
}

export default Add
