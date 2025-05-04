import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://readymadeui.com/readymadeui-short.svg"
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="text-xl font-semibold hidden sm:block">MyDashboard</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/team" className="hover:text-yellow-300 transition">Team</Link>
          <Link to="/feature" className="hover:text-yellow-300 transition">Features</Link>
          <Link to="/blog" className="hover:text-yellow-300 transition">Blog</Link>
          <Link to="/about" className="hover:text-yellow-300 transition">About</Link>

          <select className="bg-white text-gray-800 rounded-lg px-4 py-2">
            <option value="">Current</option>
            <option><Link to="/">Logout</Link></option>
          </select>

        </nav>
        
      </div>
    </header>
  );
}

export default Header;
