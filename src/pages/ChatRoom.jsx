import React from "react";
import "../App.scss";
import Container from "@material-ui/core/Container";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import useChatSocket from "../socket/useChatSocket";
import IconButton from "@material-ui/core/IconButton";
import Zoom from "@material-ui/core/Zoom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { FaArrowCircleUp, FaArrowCircleLeft } from "react-icons/fa";



function ChatRoom(props) {
  const { roomId } = props.match.params;
  const classes = useStyles();
  const [message, setNewMessage] = React.useState("");
  const { messages, sendMessage } = useChatSocket(roomId);

  const handleNewMessage = (e) => setNewMessage(e.target.value);

  const handleSendNewMessage = (e) => {
    sendMessage(message);
    setNewMessage("");
  };

  return (
    <Container className={classes.root} maxWidth="sm">
      <Container
        disableGutters
        maxWidth="sm"
        className={classes.chatRoomWrapper}
      >
        <Paper elevation={0} className={classes.paperMessageWrapper}>
          <List className={classes.messageListWrapper}>
            {messages.map((m, key) => (
              <Zoom in={true}>
                <Paper
                  key={key}
                  className={
                    m.isUserMessage
                      ? classes.myMessage
                      : classes.recievedMessage
                  }
                >
                  {m.body}
                </Paper>
              </Zoom>
            ))}
          </List>
          <Container disableGutters className={classes.txtMessageWrapper}>
            <ThemeProvider theme={theme}>
              <OutlinedInput
                fullWidth
                value={message}
                onChange={handleNewMessage}
                placeholder="Message"
                endAdornment={
                  <IconButton onClick={handleSendNewMessage} color="primary">
                    <FaArrowCircleUp size="25px" />
                  </IconButton>
                }
              />
            </ThemeProvider>
          </Container>
        </Paper>
      </Container>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "30px",
    paddingBottom: "30px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "30px",
      paddingBottom: "0px",
    },
  },

  chatRoomWrapper: {
    height: "90vh",
    width: "100%",
    boxSizing: "border-box",
    overflow: "hidden",
  },

  messageAreaWrapper: {
    boxSizing: "border-box",
    height: "100%",
    position: "static",
    width: "100%",
  },
  paperMessageWrapper: {
    height: "100%",
    width: "100%",
    position: "static",
    overflow: "hidden",
    boxSizing: "border-box",
    display: "flex ",
    flexDirection: "column",
  },

  messageListWrapper: {
    width: "100%",
    flex: 1,
    height: "100%",
    overflow: "auto",
    boxSizing: "border-box",
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingBottom: "15px",
  },
  txtMessageWrapper: {
    height:"auto",
    position: "relative",
    padding: "20px",
    boxSizing: "border-box",
  },

  myMessage: {
    backgroundColor: "#147EFB",
    marginTop: "15px",
    marginBottom: "15px",
    fontSize: "1em",
    maxWidth: "90%",
    width: "fit-content",
    height: "auto",
    boxSizing: "border-box",
    margin: "auto 0 auto auto",
    padding: "10px",
    color: "#fff",
  },
  recievedMessage: {
    maxWidth: "90%",
    backgroundColor: "#FC3158",
    fontSize: "1em",
    marginTop: "15px",
    marginBottom: "15px",
    width: "fit-content",
    height: "auto",
    boxSizing: "border-box",
    margin: "auto auto auto 0",
    color: "#fff",
    padding: "10px",
  },
}));

const theme = createMuiTheme({
    palette: {
      primary: {
          main: "#147EFB"
      },
    },
  });

export default ChatRoom;
