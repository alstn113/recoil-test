import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Next Recoil Test</h1>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div>
        <Link href="/counter">
          <a>Counter</a>
        </Link>
      </div>
      <div>
        <Link href="/todo-list">
          <a>TodoList</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
