import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChatRoom from "./pages/ChatRoom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:roomId" component={ChatRoom} />
        <Route />
      </Switch>
    </div>
  );
}

export default App;
