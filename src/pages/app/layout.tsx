import BottomNav from "@/components/ui/BottomNav";
import Sidebar from "@/components/ui/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="md:min-h-screen bg-brand-bg flex md:overflow-hidden">
      <Sidebar />
      <main className="text-gray-100 flex-1 relative h-screen overflow-y-hidden">
        <Outlet />
        <BottomNav />
      </main>
    </div>
  );
};

export default AppLayout;
