import React from 'react'
import { useSelector } from 'react-redux';

const NavBar = () => {
  const user = useSelector((store) => store.user);
  console.log(user);

  return (
    <>
      {/* Gradient Navbar */}
      <div className="navbar px-6 py-4 bg-gradient-to-r from-[#ff6a88]/90 via-[#ff99ac]/90 to-[#fad0c4]/90 backdrop-blur-lg shadow-lg border-b border-white/20">
        {/* Left Logo */}
        <div className="flex-1">
          <a className="text-2xl font-extrabold text-purple-600 drop-shadow-lg">
            👩🏻‍💻 Dev Tinder
          </a>
        </div>

        {/* Right Avatar & Dropdown */}
        {user && (
          <div className="flex items-center gap-4">
            {/* Welcome text */}
            <p className="text-lg font-semibold bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent drop-shadow-sm">
              Welcome, {user.firstName} ✨
            </p>

            {/* Avatar Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar hover:scale-105 transition-transform"
              >
                <div className="w-12 rounded-full ring-2 ring-white/70 shadow-md overflow-hidden">
                  <img
                    alt="User avatar"
                    src={user.photoUrl || "https://via.placeholder.com/150"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 w-52 p-3 bg-white/90 backdrop-blur-lg text-gray-700 rounded-2xl shadow-xl border border-gray-200/30"
              >
                <li>
                  <a className="justify-between hover:bg-pink-100/50 rounded-lg">
                    Profile
                    <span className="badge bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white border-0">
                      New
                    </span>
                  </a>
                </li>
                <li>
                  <a className="hover:bg-pink-100/50 rounded-lg">Settings</a>
                </li>
                <li>
                  <a className="hover:bg-pink-100/50 rounded-lg">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
