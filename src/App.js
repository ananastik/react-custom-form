import React, { Component } from 'react';
import './App.css';
import DropDown from './DropDown.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        itemsList: [
            {
                id: 0,
                type: 'text',
                value: '',
                placeholder: 'Edit here',
                key: 'input',
                selected: false
            },
            {
                id: 1,
                type: 'number',
                value: '',
                placeholder: 'Edit here',
                key: 'input',
                selected: false
            },
            {
                id: 2,
                type: 'submit',
                value: '',
                placeholder: 'Edit here',
                key: 'input',
                selected: false
            },
            {
                id: 3,
                type: 'checkbox',
                value: '',
                placeholder: 'Edit here',
                key: 'input',
                selected: false
            },
            {
                id: 4,
                type: 'radio',
                value: '',
                placeholder: 'Edit here',
                key: 'input',
                selected: false
            },
            {
                id: 5,
                type: 'textarea',
                value: '',
                placeholder: 'Edit here',
                key: 'input',
                selected: false
            }
        ],

        items: []
    }
}

toggleSelected = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp
    })
  }

  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp
    })
  }

  addField = (event, key) => {
    event.preventDefault();

    let itemsLocal = this.state.items;
    let newItem = JSON.parse(JSON.stringify(this.state[key]))
    itemsLocal.push(newItem);

    this.setState({
      newItem: '',  
      items: itemsLocal
    })
    console.log(itemsLocal);
}


        render() {
            return (
              <div className="App">
                <p>Dropdown menu</p>
        
                <div className="wrapper">
        
                <button id="btn" onClick={this.addField}>Add field</button>
                  <DropDown
                    title="Select field"
                    list={this.state.itemsList}
                    resetThenSet={this.resetThenSet}
                  />
                </div>
              </div>
            );
          }
        }
        
        export default App;