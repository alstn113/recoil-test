import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>React Recoil Test</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/counter">Counter</Link>
      </div>
      <div>
        <Link to="/todo-list">TodoList</Link>
      </div>
    </nav>
  );
};

export default Navbar;
