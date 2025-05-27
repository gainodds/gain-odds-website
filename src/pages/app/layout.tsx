import Sidebar from "@/components/ui/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <main className="bg-brand-bg text-gray-100 flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
