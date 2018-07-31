import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <Container style= {styles.container}>
      <Form>

      <Button style = {{ marginTop: 10}}
      full
      rounded
      success
      //onPress = {() => this.loginUser(this.state.email,this.state.password)}
      >
      <Text style = {{color: "black"}}>Login</Text>
      </Button>

      <Button style = {{ marginTop: 10}}
      full
      rounded
      success
      //  onPress = {() => this.loginUser(this.state.email,this.state.password)}
      >
      <Text style = {{color: "black"}}>Login</Text>
      </Button>

      <Button style = {{ marginTop: 10}}
      full
      rounded
      success
      //  onPress = {() => this.loginUser(this.state.email,this.state.password)}
      >
      <Text style = {{color: "black"}}>Login</Text>
      </Button>

      <Button style = {{ marginTop: 10}}
      full
      rounded
      success
      //  onPress = {() => this.loginUser(this.state.email,this.state.password)}
      >
      <Text style = {{color: "black"}}>Login</Text>
      </Button>

      <Button style = {{ marginTop: 10}}
      full
      rounded
      success
      //onPress = {() => this.loginUser(this.state.email,this.state.password)}
      >
      <Text style = {{color: "black"}}>Login</Text>
      </Button>

      </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10
  },
});
