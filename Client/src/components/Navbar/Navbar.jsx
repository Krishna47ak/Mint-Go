import Menu from '../Menu/Menu';
 export default function Navbar() {
  return (
    <nav className="bg-black bg-opacity-10 backdrop-blur-xl fixed top-0 left-0 h-16 right-0 z-30 px-10 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* <div className="bg-white rounded-full p-2">
            <span className="text-xl font-bold">S</span>
          </div> */}
          <span className="text-white text-xl font-semibold">sweatcoin</span>
        </div>
        <button className="text-white" aria-label="Menu">
          <Menu className="h-6 w-6" />
        </button>
      </nav>
  )
}

