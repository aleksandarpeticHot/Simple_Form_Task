 import React, { Component } from 'react';
import './App.css';
import {required} from  './validation';
import { Dropdown,Button,Modal,Form,Checkbox, FormField } from 'semantic-ui-react';
const inlineStyle = {
  modal : {
    marginTop: '50px '
  }
};
const modalStyle={
  modal:{
    marginTop:'100px',    
    marginLeft:'300px',
    marginRight:'60px',
    marginBottom:'40px',
    width:'38%',
    height:'41%'
  }
} 
const optionsStatus= [
  { key: 1, text: 'Open', value: 'open' },
  { key: 2, text: 'In Progress', value: 'in progress' },
  { key: 3, text: 'Done', value: 'done' },
]
const optionsPort= [
  { key: 1, text: '1', value: '1' },
  { key: 2, text: '2', value: '2' }
]

class App extends Component {
  constructor(){
    super();
    this.state = { open: false ,
      value:"",
      dValue:"",
    lista:[]}
    this.handleChangePin=this.handleChangePin.bind(this);
    this.handleChangeStatus=this.handleChangeStatus.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  show = size => () => this.setState({ size, open: true,name:size });
  close = () => this.setState({ open: false });
  handleChangeStatus(e,value){
    this.setState({value:value.value});

  }  
  handleChangePin(e,value){
    this.setState({dValue:value.value});
  }
  
  handleSubmit(event){
    console.log("Status ",this.state.value);
    console.log("Port ",this.state.dValue);    
    this.setState({open:false});
    
  }

  render() {
    const { open, size } = this.state
    return (
      <div className='app'>
      <Button content="Add Status"onClick={this.show('Add new Status')} style={inlineStyle.modal}   />
      <Button content="Edit Status" onClick={this.show('Edit Status')}/>    
      <Modal size={'tiny'} open={open} onClose={this.close} style={modalStyle.modal}>
          <Modal.Header>{this.state.name}</Modal.Header>
         
          <Modal.Content>   
              <Form id="forma1" onSubmit={this.handleSubmit} > 
               <Dropdown
               validate={required}                
                search
                selection
                options={optionsStatus}
                placeholder='Status'  
                onChange={this.handleChangeStatus}/>
              <br></br> 
              <Dropdown
                search
                selection
                options={optionsPort}
                placeholder='Attach a Port'
                onChange={this.handleChangePin}/> 
               </Form>           
          </Modal.Content>
          <Modal.Actions>    
             <Button negative onClick={this.close}>Cancel</Button>
            <Button form="forma1" type="submit" positive icon='checkmark' labelPosition='right' content='Save' />  
                    
          </Modal.Actions>
         
        </Modal>
       
      </div>
    );
  }
}

export default App; 
