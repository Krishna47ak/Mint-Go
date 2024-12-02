import Menu from '../Menu/Menu';
import logo1 from "../../assets/logo-m.svg"; // Correct the path if necessary
import { Link } from 'react-router-dom';
 export default function Navbar() {
  return (
    <nav className="bg-black bg-opacity-10 backdrop-blur-xl fixed top-0 left-0 h-16 right-0 z-30 px-10 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* <div className="bg-white rounded-full p-2">
            <span className="text-xl font-bold">S</span>
          </div> */}
          <img src={logo1} alt="logo" className="h-10" />
          <Link to="/" className="text-white text-2xl font-semibold">
          <span className="text-white text-2xl font-semibold">Mintgo</span></Link>
        </div>
        <button className="text-white" aria-label="Menu">
          <Menu className="h-6 w-6" />
        </button>
      </nav>
  )
}

