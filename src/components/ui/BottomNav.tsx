import { cloneElement } from "react";
import { BiGame } from "react-icons/bi";
import { IoReceipt } from "react-icons/io5";
import { MdSportsSoccer } from "react-icons/md";
import { RiHome5Fill, RiUserFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  const routes = [
    {
      icon: <RiHome5Fill className="size-6 rounded-full" />,
      path: "",
      label: "Home",
    },
    {
      icon: <MdSportsSoccer className="size-6" />,
      path: "sports",
      label: "Sports",
    },
    {
      icon: <BiGame className="size-7" />,
      path: "virtual",
      label: "Virtual",
    },
    {
      icon: <IoReceipt className="size-6" />,
      path: "my-bets",
      label: "My bets",
    },
    // {
    //   icon: <IoGameController className="size-6" />,
    //   path: "games",
    //   label: "Games",
    // },

    {
      icon: <RiUserFill className="size-6" />,
      path: "profile",
      label: "Profile",
    },
  ];
  return (
    <footer>
      <nav className="md:hidden absolute bottom-0 w-full flex justify-around items-baseline p-2 bg-[#0E161C]">
        {routes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            className={({ isActive }: { isActive: boolean }) =>
              `flex flex-col items-center ${
                isActive ? "text-brand-green" : "text-gray-400 "
              }`
            }
          >
            {({ isActive }: { isActive: boolean }) => (
              <>
                {cloneElement(route.icon, {
                  className: `${route.icon.props.className} ${
                    isActive
                      ? "text-brand-green"
                      : !isActive && route.path == "virtual"
                      ? "text-red-500 "
                      : "text-gray-400"
                  } transition-colors duration-200`,
                })}
                <span
                  className={`text-xs xxs:text-sm ${
                    isActive ? " font-semibold" : "font-medium"
                  }`}
                >
                  {route.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </footer>
  );
};

export default BottomNav;
