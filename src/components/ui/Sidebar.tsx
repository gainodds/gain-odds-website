import {
  MdOutlineMenu,
  MdSportsBaseball,
  MdSportsBasketball,
  MdSportsFootball,
  MdSportsSoccer,
  MdSportsTennis,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const routes = [
    {
      icon: <MdSportsSoccer className="md:size-4 lg:size-5" />,
      path: "soccer",
    },
    {
      icon: <MdSportsBasketball className="md:size-4 lg:size-5" />,
      path: "Basketball",
    },
    {
      icon: <MdSportsFootball className="md:size-4 lg:size-5" />,
      path: "American football",
    },

    {
      icon: <MdSportsBaseball className="md:size-4 lg:size-5" />,
      path: "Baseball",
    },
    {
      icon: <MdSportsTennis className="md:size-4 lg:size-5" />,
      path: "football",
    },
  ];

  const p = "soccer";

  return (
    <nav className="bg-brand-bgDark/50 text-white px-3 pt-5 flex flex-col gap-5">
      <button className="p-2 rounded-full bg-[#152A38] mb-3">
        <MdOutlineMenu className="md:size-4 lg:size-5" />
      </button>

      {routes.map((route) => (
        <Link
          title={route.path}
          to={route.path}
          key={route.path}
          className={`p-2 ${
            p === route.path ? "rounded-full bg-[#37AF01] " : ""
          }`}
        >
          {route.icon}
        </Link>

        // <NavLink
        //   to={route.path}
        //   className={({ isActive }) =>
        //     isActive
        //       ? "text-white text-sm font-medium rounded-r-full shadow-lg active:scale-95 duration-300 bg-brand-blue p-3 flex gap-3 items-center"
        //       : "p-3 flex gap-3 font-medium items-center duration-200 text-sm"
        //   }
        // >
        //   {route.icon}
        // </NavLink>
      ))}
    </nav>
  );
};

export default Sidebar;
