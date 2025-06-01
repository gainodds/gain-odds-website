import TextInput from "@/components/shared/TextInput";
import OddsCard from "@/components/ui/OddsCard";

const Home = () => {
  return (
    <div className=" divide-x-2 divide-divide flex h-screen overflow-hidden">
      <aside className="hidden md:block py-3 px-8 md:px-14">asinde muni</aside>

      <div className="divide-y-2 divide-divide space-y-3 flex-1 overflow-y-auto">
        <header className="p-3 sticky top-0 bg-brand-bg z-5">
          <TextInput
            type="search"
            placeholder="Search league, teams, competition"
            extraClass="max-w-3xl"
          />
        </header>

        <div className="flex p-3 gap-3 ">
          <div className="flex-1 lg:basis-4/5 space-y-5 ">
            {/* Hot matches section */}
            <section className="space-y-2">
              <h2 className="text-lg md:text-2xl font-medium">Hot Matches</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
                <OddsCard title=" UEFA Champions League" />
                <OddsCard title=" UEFA Champions League" />
                <OddsCard title=" UEFA Champions League" />
                <OddsCard title=" UEFA Champions League" />
              </div>
            </section>
            {/* Champions league section */}
            <section className="space-y-2">
              <h2 className="text-lg md:text-2xl font-medium">
                Champions League
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
                <OddsCard title=" UEFA Champions League" />
                <OddsCard title=" UEFA Champions League" />
                <OddsCard title=" UEFA Champions League" />
                <OddsCard title=" UEFA Champions League" />
              </div>
            </section>
          </div>

          <aside className="hidden lg:block basis-1/5 sticky top-20 bg-brand-bgDark/50 rounded-md h-full space-y-6">
            <form className="p-3 space-y-2">
              <TextInput placeholder="Enter code" label="Booking code" />
              <button className="border border-brand-green bg-transparent w-full rounded-lg p-1.5 text-brand-green hover:bg-brand-green hover:text-white duration-300 cursor-pointer">
                Load
              </button>
            </form>
            <img
              src="/promo_banner.png"
              alt="promo banner"
              loading="lazy"
              className="h-44 w-full"
            />

            <form className="p-3 space-y-3">
              <TextInput placeholder="Enter phone/email" label="Phone/email" />
              <TextInput
                placeholder="Enter password"
                label="Password"
                type="password"
              />
              <button className="border border-brand-green bg-transparent w-full rounded-lg p-1.5 text-brand-green hover:bg-brand-green hover:text-white duration-300 cursor-pointer">
                Enter
              </button>
            </form>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Home;
