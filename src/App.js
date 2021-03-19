import "./App.scss";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Home from "./pages/Home";
import ChatRoom from "./pages/ChatRoom";
import MessagesBox from "./pages/MessagesBox";

function App() {
  const { userId } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={`${userId}`} component={MessagesBox} />
        <Route path={`${userId}/:roomId`} component={ChatRoom} />
      </Switch>
    </>
  );
}

export default App;
