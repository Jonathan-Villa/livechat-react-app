import "./App.scss";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Home from "./pages/Home";
import ChatRoom from "./pages/ChatRoom";
import MessagesBox from "./pages/MessagesBox";

function App() {
  const { userId, roomId } = useRouteMatch();

  return (
    <>
      <Switch>
        <>
          <Route path={`/:${userId}/:${roomId}`} component={ChatRoom} />
        </>

        <Route exact path="/" component={Home} />
        <Route path={`/:${userId}`} component={MessagesBox} />
      </Switch>
    </>
  );
}

export default App;
