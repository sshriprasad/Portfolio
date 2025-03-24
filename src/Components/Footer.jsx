import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="sm:flex flex-1 items-center sm:justify-evenly justify-center bg-gray-800 text-white p-5">
        <div>
          <h3 className="text-green-500 font-bold text-3xl text-center py-2">
            {" "}
            Shri Prasad Yadav
          </h3>
          <p className="text-center">🚀 Full Stack Developer | MERN Stack</p>
        </div>
        <div>
          <h3 className="text-yellow-600 font-bold text-xl text-center py-2">
            Quick Links
          </h3>
          <ul className="text-center">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href={'mailto:sshriprasad537@gmail.com?subject=${encodeURIComponent("subject")}&body=${encodeURIComponent("body")}'}>Contact</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#skills">Skills</a>
            </li>
            <li>
              <a href="/#education">Education</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-yellow-600 font-bold text-xl text-center py-2">
            Follow me
          </h3>
          <ul className="flex flex-col items-center justify-center">
            <li>
              <a href="https://www.linkedin.com">
                <FaLinkedin className="text-2xl text-blue-400 hover:text-blue-600" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com">
                <FaInstagramSquare className="text-2xl text-pink-500 hover:text-pink-600" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                className="text-2xl text-blue-400 hover:text-blue-600"
              >
                <FaGithubSquare />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};