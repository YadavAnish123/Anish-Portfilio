// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const MessageBox = () => {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState('');
//   const socket = io('http://localhost:4000'); // Change to match your server

//   useEffect(() => {
//     // Listen for incoming messages
//     socket.on('message', (msg) => {
//       setMessages([...messages, msg]);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, [messages]);

//   const sendMessage = () => {
//     socket.emit('message', message);
//     setMessage('');
//   };

//   return (
//     <div>
//       <div>
//         {messages.map((msg, index) => (
//           <div key={index}>{msg}</div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// };

// export default MessageBox;
