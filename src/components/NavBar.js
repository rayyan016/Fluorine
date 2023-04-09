import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <>
      <header className="bg-teal-800">
        <div className="container mx-auto flex justify-between">
          <nav className="flex">
            <NavLink
              to="/"
              exact
              className={(navData) =>
                navData.isActive
                  ? "inline-flex items-center py-6 px-3 mr-4 text-white hover:text-green-300 text-4xl font-bold cursive tracking-widest"
                  : "inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-300 text-4xl font-bold cursive tracking-widest"
              }
            >
              Perseus
            </NavLink>
            <NavLink
              to="/post"
              className={(navData) =>
                navData.isActive
                  ? "inline-flex items-center py-3 px-3 my-6 rounded text-red-100 bg-cyan-900 hover:text-green-300"
                  : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-300"
              }
            >
              Blog Posts
            </NavLink>
            <NavLink
              to="/project"
              className={(navData) =>
                navData.isActive
                  ? "inline-flex items-center py-3 px-3 my-6 rounded text-red-100 bg-cyan-900 hover:text-green-300"
                  : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-300"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className={(navData) =>
                navData.isActive
                  ? "inline-flex items-center py-3 px-3 my-6 rounded text-red-100 bg-cyan-900 hover:text-green-300"
                  : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-300"
              }
            >
              About Me!
            </NavLink>
          </nav>

          <div className="inline-flex py-3 px-3 my-6">
            {/* <FontAwesomeIcon className="rounded-full p-2 mr-4" icon={faHashnode} size="xl" style={{ color: "#3b5e9b" }} /> */}
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
              network=""
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

// npm i --save @fortawesome/fontawesome-svg-core
//npm i --save @fortawesome/react-fontawesome@latest
//npm i --save @fortawesome/free-brands-svg-icons

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHashnode } from "@fortawesome/free-brands-svg-icons";