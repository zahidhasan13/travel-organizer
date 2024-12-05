import { MdOutlineModeOfTravel } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header absolute top-0 left-0 right-0 z-50">
      <nav className="nav container mx-auto lg:flex lg:items-center lg:justify-between py-5">
        <Link
          to={"/"}
          className="flex items-center gap-1 text-2xl font-semibold font-raleway"
        >
          <span>
            <MdOutlineModeOfTravel />
          </span>
          <span>Travel Organizer</span>
        </Link>
        <ul className="links lg:flex lg:items-center gap-7 uppercase font-roboto font-medium tracking-widest">
          {["home", "event", "gallery", "about", "contact"].map((link, idx) => (
            <li key={idx}>
              <NavLink to={`/${link}`}>{link}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
