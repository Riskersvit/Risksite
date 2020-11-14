import 'dart:html';
import 'package:firebase/firebase.dart';

InputElement nameInput = querySelector('input#name');
InputElement messageInput = querySelector('input#message');
DivElement messageDiv = querySelector('#messagesDiv');
ButtonElement sendButton = querySelector('button');

void main() {
  // You can also use your own firebase url, if you have one.
  // Or signup for firebase at: https://www.firebase.com/signup/
  String firebaseUrl = 'https://dartnow-example.firebaseio.com/';

  Firebase firebase = new Firebase(firebaseUrl);

  messageInput.onKeyPress.listen((e){
    if (e.keyCode == KeyCode.ENTER) {
      addMessageToFireBase(firebase);
    }
  });

  sendButton.onClick.listen((e) => addMessageToFireBase(firebase));

  firebase.onChildAdded.listen((e) {
    DataSnapshot snapshot = e.snapshot;
    Map message = snapshot.val();
    displayChatMessage(message['name'], message['text']);
  });
}

void addMessageToFireBase(Firebase firebase) {
  String name = nameInput.value;
  String text = messageInput.value;
  firebase.push().set({'name': name, 'text': text});
  messageInput.value = '';
}

void displayChatMessage(String name, String text) {
  messageDiv.append(new DivElement()..innerHtml = '<b>$name:</b> $text');
}