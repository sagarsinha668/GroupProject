import { Link } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  const links = [
    { to: "/", page: "Home" },
    { to: "/product", page: "Products" },
    { to: "/login", page: "login" },
  ];

  return (
    <nav>
      
      <div className="email">
        EMAIL
      </div>

      <ul>
        {links.map((ele) => {
          return (
            <li key={ele.to}>
              <Link to={ele.to}>{ele.page}</Link>
            </li>
          );
        })}
      </ul>

       <button>logout</button>
    </nav>
  );
};

export default Navbar;
