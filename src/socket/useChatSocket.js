import React from "react";
import socketIO from "socket.io-client";

const MESSAGE_NOTIFICATION = "NewMessage";
const socketURL = "http://localhost:4000";

function useChatSocket(roomId) {
  const [messages, setMessage] = React.useState([]);
  const socketRef = React.useRef();

  React.useEffect(() => {
      
    socketRef.current = socketIO(socketURL, { query: { roomId } });

    socketRef.current.on(MESSAGE_NOTIFICATION, (message) => {
      const newMessage = {
        ...message,
        isUserMessage: message.senderId === socketRef.current.id,
      };
      setMessage((messages) => [...messages, newMessage]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const sendMessage = (messageBody) => {
    socketRef.current.emit(MESSAGE_NOTIFICATION, {
      body: messageBody,
      senderId: socketRef.current.id,
    });
  };

  return { messages, sendMessage };
}

export default useChatSocket;
