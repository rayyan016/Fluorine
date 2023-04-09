import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function NavBar() {
  return (
    <>
      <header className="bg-red-600">
        <div className="container mx-auto flex justify-between">
          <nav className="flex">
            <NavLink
              to="/"
              exact
              className={(navData) =>
                navData.isActive
                  ? "inline-flex items-center py-6 px-3 mr-4 text-white hover:text-green-800 text-4xl font-bold cursive tracking-widest"
                  : "inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
              }
            >
              Perseus
            </NavLink>
            <NavLink
              to="/post"
              className={(navData) =>
                navData.isActive
                  ? "inline-flex items-center py-3 px-3 my-6 rounded text-red-100 bg-red-700 hover:text-green-800"
                  : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
              }
            >
              Blog Posts
            </NavLink>
            <NavLink
              to="/project"
              className={(navData) =>
                navData.isActive
                  ? "inline-flex items-center py-3 px-3 my-6 rounded text-red-100 bg-red-700 hover:text-green-800"
                  : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className={(navData) =>
                navData.isActive
                  ? "inline-flex items-center py-3 px-3 my-6 rounded text-red-100 bg-red-700 hover:text-green-800"
                  : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
              }
            >
              About Me!
            </NavLink>
          </nav>

          <div className="inline-flex py-3 px-3 my-6">
          {/* <FontAwesomeIcon icon={faHashnode} style={{color: "#1a5ad1",}} /> */}
            <SocialIcon
              url="https://github.com/rayyan016"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/rayyan-aslam/"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://hashnode.com/@RayyanAslam"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
          
        </div>
      </header>
    </>
  );
}

// className={(navData) => navData.isActive ? "active" : "" }
// className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
