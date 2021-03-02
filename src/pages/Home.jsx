import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

function Home() {
  const classes = useStyles();
  const [roomName, setRoomName] = React.useState("");

  const handleChange = (e) => {
    setRoomName(e.target.value);
  };

  return (
    <Container maxWidth="xs" className={classes.root}>
      <Card onChange={handleChange} className={classes.cardWrapper}>
        <CardContent className={classes.cardContentWrapper}>
          <CardHeader
            title="Live Chat"
            style={{ textAlign: "center", flex: 1 }}
          />
          <ThemeProvider theme={theme}>
            <TextField
              style={{ marginTop: "10px" }}
              required
              fullWidth
              size="small"
              type="text"
              color="primary"
              variant="outlined"
              label="Chat Name"
              value={roomName}
            />
            <div style={{ marginTop: "10px" }}>
              <Button
                fullWidth
                className={classes.btnEnterRoom}
                component={Link}
                variant="outlined"
                color="primary"
                to={`/${roomName}`}
              >
                Chat
              </Button>
            </div>
          </ThemeProvider>
        </CardContent>
      </Card>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "auto",
    width: "100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    position:"relative",
    top:"50%"
  },
  cardWrapper: {
    position: "relative",
    height: "250px",
    width: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "20px",
    
  
  },
  cardContentWrapper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#147EFB",
    },
  },
});

export default Home;
