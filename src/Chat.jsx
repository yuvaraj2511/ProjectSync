import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import './Chat.css';

const Chat = ({ currentUser, projectUser }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAXG0qTtaCH8-_Os6uOUXni-kx5dG1k9sI",
        authDomain: "projectsync-5c6d5.firebaseapp.com",
        projectId: "projectsync-5c6d5",
        storageBucket: "projectsync-5c6d5.appspot.com",
        messagingSenderId: "11508828739",
        appId: "1:11508828739:web:2c7e3b24a9bd7e019c62f6",
        measurementId: "G-DKDC85C9L2"
      };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Create a Firestore reference
    const db = firebase.firestore();

    // Listen for messages in the Firestore collection
    db.collection('messages')
      .orderBy('timestamp')
      .onSnapshot((snapshot) => {
        const newMessages = snapshot.docs.map((doc) => doc.data());
        setMessages(newMessages);
      });
  }, []);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const db = firebase.firestore();
      db.collection('messages').add({
        text: message,
        sender: currentUser,
        receiver: projectUser,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chat with {projectUser}</h2>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === currentUser ? 'sent' : 'received'}`}
          >
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
