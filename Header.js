import { Outlet, Link } from "react-router-dom";


const Header = () => {
  return (
    <>
    <div className="navi">
    <div class="containers">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter"> View events,  Add your events,  Enjoy moments</h3>
    </div>
  </div>
</div>
    <h1 className='text'></h1>
                <h1 className='text'></h1>
      <navs>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/register"><button>Add Event</button></Link>
          </li>
          
        </ul>
      </navs>

      <Outlet />
      </div> </>
  )
};

export default Header;