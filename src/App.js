 import React, { Component } from 'react';
import './App.css';
import { Dropdown,Button,Modal } from 'semantic-ui-react';
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
  { key: 1, text: '1', value: '2' },
  { key: 2, text: '2', value: '2' }
]

class App extends Component {
    state = { open: false }

  show = size => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });
    
  

  render() {
    const { open, size } = this.state
    return (
      <div className='app'>
      <Button content="Add Status"onClick={this.show('tiny')} style={inlineStyle.modal}  />
      <Button content="Edit Status" onClick={this.show('tiny')}/>
    
      <Modal size={size} open={open} onClose={this.close} style={modalStyle.modal}>
          <Modal.Header>Add new status</Modal.Header>
          <Modal.Content>
          <Dropdown
             search
             selection
             options={optionsStatus}
             placeholder='Status'
            
           />
           <br></br>
           <Dropdown
             search
             selection
             options={optionsPort}
             placeholder='Attach a Port'
            
           />
           
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.close}>Cancel</Button>
            <Button positive icon='checkmark' labelPosition='right' content='Save' />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default App; 
