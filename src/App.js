import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChatRoom from "./pages/ChatRoom";
import MessagesBox from "./pages/MessagesBox"

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/:userId' component={MessagesBox}/>
        <Route exact path="/:userId&roomId" component={ChatRoom} />
        <Route />
      </Switch>
    </>
  );
}

export default App;
