import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="shadow-md mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <Link to="/" className="flex items-center">
        <span className="text-xl font-bold text-black">NewsAggregation</span>
      </Link>
    </nav>
  );
}