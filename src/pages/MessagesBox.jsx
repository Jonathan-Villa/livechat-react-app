import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import useChatSocket from "../socket/useChatSocket";

function MessagesBox() {
  const history = useHistory();

  const handleIconBtn = () => {
    history.push("/");
  };

  return (
    <div className="message-box-container">
      <Paper elevation={17} className="message-box-wrapper">
        <div className="message-box-inner-wrapper">
          <div className="messages-box-heading-wrapper">
            <div className="btn-wrap">
              <IconButton
                className="iconBtn"
                onClick={handleIconBtn}
                color="primary"
              >
                <FaArrowCircleLeft />
              </IconButton>
            </div>
            <div className="messages-box-heading">
              <h1>Messages</h1>
            </div>
          </div>
          <div className="message-container">{Message()}</div>
        </div>
      </Paper>
    </div>
  );
}

export default MessagesBox;

function Message() {
  const [input, setInput] = React.useState({ chatRoom: "", textMsg: " " });
  const history = useHistory();
  React.useEffect(() => {
    const getFields = () => {
      let input = JSON.parse(localStorage.getItem("user"));
      setInput({ chatRoom: input.roomName, textMsg: input.userId });
    };

    getFields();
  }, []);

  const handleClick = (e) => {
    history.push({
      pathname:`${input.textMsg}`,
      search:`${input.chatRoom}`
    });
  };

  return (
    <div onClick={handleClick} className="messages-boxes">
      <div className="messages-boxes-inner-wrap">
        <div className="messages-chat-room-name">
          <h3>{input.chatRoom}</h3>
          <div className="messages-boxes-p">
            <p>{input.textMsg.split(" ").splice(0, 20).join(" ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
