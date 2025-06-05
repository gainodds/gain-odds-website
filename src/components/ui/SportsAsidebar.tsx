import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { useLocation } from "react-router-dom";

const SportsAsidebar = () => {
  const location = useLocation();
  const currentHash = location.hash.replace("#", "");

  const sportsLeagues = [
    {
      sport: "Football",
      icon: "⚽",
      leagues: [
        "Premier League",
        "La Liga",
        "Serie A",
        "Bundesliga",
        "Ligue 1",
      ],
    },
    {
      sport: "Basketball",
      icon: "🏀",
      leagues: ["NBA", "EuroLeague", "ACB", "CBA"],
    },
    {
      sport: "Tennis",
      icon: "🎾",
      leagues: ["ATP Tour", "WTA Tour", "Davis Cup"],
    },
    {
      sport: "Cricket",
      icon: "🏏",
      leagues: ["IPL", "Big Bash League", "The Hundred"],
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <aside className="hidden md:block py-5 space-y-6">
      <div className="w-full px-8">
        <img
          src="/GB-logo.png"
          alt="gain odds logo"
          loading="lazy"
          className="w-full"
        />
      </div>

      <ul className="space-y-2 transition-all duration-300 w-full -mr-8">
        {sportsLeagues.map((item, idx) => (
          <li key={item.sport}>
            <button
              className="flex items-center w-full justify-between py-2 px-8  hover:bg-brand-gray transition cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
            >
              <span className="flex items-center gap-2">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xl font-medium">{item.sport}</span>
                <BiChevronDown
                  aria-label={openIndex === idx ? "Collapse" : "Expand"}
                  className={`transition-transform duration-200 ${
                    openIndex === idx ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </button>
            <div
              style={{
                overflow: "hidden",
                transition: "max-height 0.3s cubic-bezier(0.4,0,0.2,1)",
                maxHeight: openIndex === idx ? "500px" : "0",
              }}
            >
              <ul className="mt-1 space-y-1">
                {item.leagues.map((league) => (
                  <li key={league}>
                    <a
                      href={`#${league.replace(/\s+/g, "-").toLowerCase()}`}
                      className={`block m py-3 pl-12 transition duration-200 ${
                        // Detect sub route from hash if present, else from route path
                        currentHash ===
                        league.replace(/\s+/g, "-").toLowerCase()
                          ? "text-brand-green font-semibold bg-brand-bgDark/50 border-e-4 border-brand-green"
                          : "hover:bg-brand-gray/40"
                      }`}
                    >
                      {league}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SportsAsidebar;
