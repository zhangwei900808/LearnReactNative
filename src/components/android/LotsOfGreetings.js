import React,{Component} from 'react';
import {AppRegistry,Text,View} from 'react-native';

class Greeting extends Component {
  render() {
    return(
      <Text>Helo {this.props.name}!</Text>
    )
  }
}

export default class LotsOfGreetings extends Component{
  render(){
    return(
      <View style={{alignItems:'center'}}>
        <Greeting name='Zhangwei' />
        <Greeting name='Wangwang' />
        <Greeting name='Xiaobai' />
      </View>
    );
  }
}
