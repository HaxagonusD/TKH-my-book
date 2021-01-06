import "./Header.css";
function Header() {
  return (
    <nav className="nav" style={{ backgroundColor: "DarkOrange" }}>
      <ul className="nav-ul">
        <li className="">Book App</li>
        <li className="">Home</li>
        <li className="">Books</li>
        <li className="">About</li>
      </ul>
    </nav>
  );
}
export default Header;
