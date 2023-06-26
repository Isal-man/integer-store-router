import { GiGalaxy } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink to={"/"} className="logo">
        <GiGalaxy size={24} />
        <div>IntegerStore</div>
      </NavLink>
      <nav>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Beranda
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </nav>
      <button>Login</button>
    </header>
  );
}
