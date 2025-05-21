import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="h-screen dark:bg-gray-950 dark:text-gray-100 p-3">
      <header className="flex justify-between dark:bg-gray-800 p-3 rounded">
        logo
        <nav>asdas</nav>
      </header>
      <Outlet />
    </div>
  );
};

export default AppLayout;
