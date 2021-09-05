import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Counter} exact path="/counter" />
        <Route component={TodoList} exact path="/todo-list" />
      </Switch>
    </div>
  );
}

export default App;
