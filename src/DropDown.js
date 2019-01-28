import React, { Component } from 'react';
import onClickOutside from "react-onclickoutside";
import FontAwesome from 'react-fontawesome';

class DropDown extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listOpen: false,
            headerTitle: this.props.title
        }
    }
    componentDidUpdate = () => {
        const { listOpen } = this.state
        setTimeout(() => {
            if (listOpen) {
                window.addEventListener('click', this.close)
            }
            else {
                window.removeEventListener('click', this.close)
            }
        }, 0)
    }

    componentWillUnmount = () => {
        window.removeEventListener('click', this.close)
      }
    
      close = (timeOut) =>{
        this.setState({
          listOpen: false
        })
      }
    
      selectItem = (title, id, stateKey) => {
        this.setState({
          headerTitle: title,
          listOpen: false
        }, this.props.resetThenSet(id, stateKey))
      }
    
      handleClickOutside = () => {
        this.setState({
          listOpen: false
        })
      }
      
      toggleList = () => {
        this.setState(prevState => ({
          listOpen: !prevState.listOpen
        }))
      }
    


      render(){
        const{list} = this.props
        const{listOpen, headerTitle} = this.state
        return(
          <div className="dd-wrapper">
            <div className="dd-header" onClick={() => this.toggleList()} onClickOutside={() => this.handleClickOutside()}>
              <div className="dd-header-title">{headerTitle}</div>
              {listOpen}
            </div>
            {listOpen && <ul className="dd-list" onClick={e => e.stopPropagation()}>
              {list.map((item)=> (
                <li className="dd-list-item" key={item.id} onClick={() => this.selectItem(item.type, item.id, item.key)}>{item.type}{item.selected }</li>
              ))}
            </ul>}
          </div>
        )
      }
    }

export default DropDown;