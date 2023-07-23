import React, { Component } from 'react'
import {View,Text,Botton, Button} from 'react-native';
import {observer} from 'mobx-react';
import CreateStore from '../mobx/createStore';
 class Home extends Component {

  constructor(props){
    super(props)
  this.state={
    nane:'',
  }
  }

  componentDidMount=async()=>{

let data= await CreateStore.getData;
this.setState({nane:data})

  }
      increment=()=>{
CreateStore.increment();
      }
      decrement = ()=>{

            CreateStore.decrement();
      }
  render() {
    return (
      <>
      <Text>name==={this.state.nane}</Text>
        <Text>{CreateStore.count}</Text>
        <Button title="++" onPress={this.increment}/>
        <Button title="--" onPress={this.decrement}/>

      </>
    )
  }
}
export default observer(Home);