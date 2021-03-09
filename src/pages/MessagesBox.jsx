import React from "react";
import {FaArrowCircleLeft} from "react-icons/fa"
import {} from "@material-ui/core/IconButton"

function MessagesBox() {
  const [input, setInput] = React.useState({ chatRoom: "", textMsg: " " });

  React.useEffect(() => {
    const getFields = () => {
      let input = JSON.parse(localStorage.getItem("user"));
      setInput({ chatRoom: input.roomName, textMsg: input.userId });
    };

    getFields();
  }, []);

  const messageBox = (
    <div className="messages-boxes">
      <div>
        <h3>{input.chatRoom}</h3>
        <div className="messages-boxes-p">
          <p>{input.textMsg.split(" ").splice(0, 21).join(" ")}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="message-box-container">
        <div>

        </div>
      <div className="message-box-wrapper">
        <div className="message-box-inner-wrapper">
          <div className="messages-box-heading-wrapper">
            <h1 className="messages-box-heading">Messages</h1>
          </div>
          {messageBox}
        </div>
      </div>
    </div>
  );
}

const lorm = "Lorem ipsum, dolor sit amet";

export default MessagesBox;
