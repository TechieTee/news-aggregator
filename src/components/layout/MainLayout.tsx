import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}