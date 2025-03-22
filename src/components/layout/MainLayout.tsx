import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <main className="h-screen bg-gray-50 flex flex-1 lg:px-6">
      <Outlet />
    </main>
  );
}
