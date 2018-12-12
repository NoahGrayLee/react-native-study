/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      todos: [1,2,3],
      newTodo: ''
    }
  }

  handleChange(text) {
    this.setState({newTodo: text});
  }

  handlePress() {
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''});
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          value={this.state.newTodo} 
          onChangeText={this.handleChange.bind(this)} 
          style={styles.textinput}
        />
        <TouchableOpacity 
          onPress={this.handlePress.bind(this)}
          style={styles.button}
        >
        <Text>Tap me</Text>
        </TouchableOpacity>
        <View>
          {this.state.todos.map((todo, i) => 
            <Text key={i}>{todo}</Text>)
          }  
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textinput: {
    borderWidth: 0.5,
    borderColor: '#ccc',
    width: 300,
    height: 40,
    textAlign: 'center',
    marginBottom: 5
  },
  button: {
    backgroundColor: 'pink',
    padding: 5, 
  }
});
