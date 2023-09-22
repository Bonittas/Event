import { Outlet, Link } from "react-router-dom";


const Header = () => {
  return (
    <>
    <div className="navi">
   
   
      <navs>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sugga">Upload Suggestion</Link>
          </li>
          <li>
            <Link to="/sugg">Suggestion</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/signup"><button>Add Event</button></Link>
          </li>
          
        </ul>
      </navs>

      <Outlet />
      </div> </>
  )
};

export default Header;