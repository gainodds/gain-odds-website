import { cloneElement } from "react";
import { BiGame } from "react-icons/bi";
import { IoReceipt } from "react-icons/io5";
import {
  MdOutlineMenu,
  // MdSportsBaseball,
  // MdSportsBasketball,
  // MdSportsFootball,
  MdSportsSoccer,
  // MdSportsTennis,
} from "react-icons/md";
import { RiHome5Fill, RiUserFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  // const routes = [
  //   {
  //     icon: <MdSportsSoccer className="md:size-4 lg:size-5" />,
  //     path: "soccer",
  //   },
  //   {
  //     icon: <MdSportsBasketball className="md:size-4 lg:size-5" />,
  //     path: "Basketball",
  //   },
  //   {
  //     icon: <MdSportsFootball className="md:size-4 lg:size-5" />,
  //     path: "American football",
  //   },

  //   {
  //     icon: <MdSportsBaseball className="md:size-4 lg:size-5" />,
  //     path: "Baseball",
  //   },
  //   {
  //     icon: <MdSportsTennis className="md:size-4 lg:size-5" />,
  //     path: "football",
  //   },
  // ];

  const routes = [
    {
      icon: <RiHome5Fill className="md:size-4 lg:size-5 rounded-b-full" />,
      path: "",
      label: "Home",
    },
    {
      icon: <MdSportsSoccer className="md:size-4 lg:size-5" />,
      path: "sports",
      label: "Sports",
    },
    {
      icon: <BiGame className="md:size-4 lg:size-5" />,
      path: "virtual",
      label: "Virtual",
    },
    {
      icon: <IoReceipt className="md:size-4 lg:size-5" />,
      path: "my-bets",
      label: "My bets",
    },
    // {
    //   icon: <IoGameController className="md:size-4 lg:size-5" />,
    //   path: "games",
    //   label: "Games",
    // },

    {
      icon: <RiUserFill className="md:size-4 lg:size-5" />,
      path: "profile",
      label: "Profile",
    },
  ];

  return (
    <nav className="hidden bg-brand-bgDark/50 text-white px-3 pt-5 md:flex flex-col items-center gap-5">
      <button className="p-2 rounded-full bg-[#152A38] mb-3">
        <MdOutlineMenu className="md:size-4 lg:size-5" />
      </button>

      {routes.map((route) => (
        <NavLink
          title={route.label}
          key={route.path}
          to={route.path}
          className={({ isActive }: { isActive: boolean }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? "text-brand-green" : "text-gray-200"
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
                    : "text-gray-200"
                } transition-colors duration-200`,
              })}
              <span
                className={`text-sm ${
                  isActive ? "font-semibold" : " font-medium"
                }`}
              >
                {route.label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default Sidebar;
