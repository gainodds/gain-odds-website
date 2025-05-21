import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex dark:bg-gray-950 dark:text-gray-100">
      <main className="md:basis-1/2 relative">
        <Outlet />
        <p className="text-center font-medium absolute bottom-1 w-full">
          © 2025 Comfortry, All rights reserved.
        </p>
      </main>
      <aside className="hidden md:block sticky top-0 right-0 left-0 basis-1/2 h-screen py-3 w-full">
        <img
          src="/auth_poster.svg"
          alt="auth poster"
          className="object-contain w-full h-full"
          loading="lazy"
        />
      </aside>
    </div>
  );
};

export default AuthLayout;
