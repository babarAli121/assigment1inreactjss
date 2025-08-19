import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">MyWebsite</h1>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
