import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <header className="bg-black/60 backdrop-blur z-50">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-semibold text-white">
            Bikram Saha
          </Link>

          <nav className="flex items-center space-x-6">
              <NavLink
                to='/'
                className={({isActive}) => `${isActive? 'text-orange-700': 'text-slate-300'} hover:text-white`}
              >
                Home
              </NavLink>
              <NavLink
                to='/about'
                className={({isActive}) => `${isActive? 'text-orange-700': 'text-slate-300'} hover:text-white`}
              >
                About
              </NavLink>
              <NavLink
                to='/contact'
                className={({isActive}) => `${isActive? 'text-orange-700': 'text-slate-300'} hover:text-white`}
              >
                Contact
              </NavLink>
              <NavLink
                to='/github'
                className={({isActive}) => `${isActive? 'text-orange-700': 'text-slate-300'} hover:text-white`}
              >
                Github
              </NavLink>
            <button className="ml-2 px-4 py-2 rounded-xl-strong font-medium">
              Sign In
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;