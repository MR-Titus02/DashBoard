import { Link } from "react-router-dom";
function Footer() {
    return (
      <footer className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-6 ">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} MyDashboard. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <Link to="/" className="hover:text-yellow-300">Home</Link>
            <Link to="/privacy" className="hover:text-yellow-300">Privacy</Link>
            <Link to="/contact" className="hover:text-yellow-300">Contact</Link> 
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  