import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
// Initialize Firebase
const config = {
  apiKey: "AIzaSyCSeUr0BRosg-kMTEW1azlmqlm4gZEX4jQ",
  authDomain: "react-firebase-695fa.firebaseapp.com",
  databaseURL: "https://react-firebase-695fa.firebaseio.com",
  projectId: "react-firebase-695fa",
  storageBucket: "react-firebase-695fa.appspot.com",
  messagingSenderId: "960390469614"
};
firebase.initializeApp(config);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = firebase.storage();
// Create a storage reference from our storage service
//const storageRef = storage.ref();
// Points to the root reference
const storageRef = firebase.storage().ref();


export default class App extends React.Component {

  listDocuments = (storageRef) => {

    try{
      console.log("LIST DOCS:::"+storageRef);
      console.log("LIST DOCS storages::::::"+storageRef.child('LIC_Architecture_Specification_v 2.0.docx'));
      console.log("LIST DOCS storages::::::"+storageRef.child('Sample/BillDesk - All Your Payments.pdf'));
    }catch(error){
      console.log("ERROR"+error.toString())
    }
  }

render() {
    return (
      <Container style= {styles.container}>
      <Form>
      <Button style = {{ marginTop: 10}}
      full
      rounded
      success
      onPress = {() => this.listDocuments(storageRef)}
      >
      <Text style = {{color: "white"}}>List</Text>
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
