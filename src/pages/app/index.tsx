import { useState } from "react";
import ModalContainer from "@/components/shared/ModalContainer";
import TextInput from "@/components/shared/TextInput";
import OddsCard from "@/components/ui/OddsCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [signupModalOpen, setsignupModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [forgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false);

  const toggleSignupModal = () => {
    setsignupModalOpen(!signupModalOpen);
  };
  const toggleLoginModal = () => {
    setLoginModalOpen(!loginModalOpen);
  };

  const toggleForgotPasswordModal = () => {
    setForgotPasswordModalOpen(!forgotPasswordModalOpen);
  };

  return (
    <div className="divide-y-2 divide-divide space-y-3 flex-1 overflow-y-auto md:min-h-screen  h-full ">
      <header className="p-3 fixed md:sticky top-0 bg-brand-bg z-10 w-full flex items-center justify-between gap-3 ">
        <TextInput
          type="search"
          placeholder="Search league, teams, competition"
          extraClass="w-full max-w-44 xxs:max-w-52 xs:max-w-64 sm:max-w-xs lg:max-w-xl xl:max-w-2xl"
        />
        <div className="bg-brand-bgDark/50 rounded-md flex items-center gap-2 px-3 py-2">
          <button className="btn !px-4" onClick={toggleLoginModal}>
            Sign in
          </button>
        </div>
      </header>

      <div className="flex p-3 gap-3 mt-20 md:mt-0 overflow-y-scroll h-full">
        {/* Right side main screen */}
        <div className="flex-1 lg:basis-4/5 space-y-3 mb-16 md:mb-0 overflow-x-hidden ">
          <div className="md:hidden w-full">
            <img
              src="/mobile_promo_banner.png"
              alt="promo banner"
              loading="lazy"
              className="w-full"
            />
          </div>
          {/* Hot matches section */}
          <section className="space-y-2">
            <h2 className="text-lg md:text-2xl font-medium">Hot Matches</h2>
            <div className="flex gap-2 overflow-x-scroll snap-x lg:scrollbar-default ">
              <OddsCard title=" UEFA Champions League" />
              <OddsCard title=" UEFA Champions League" />
              <OddsCard title=" UEFA Champions League" />
              <OddsCard title=" UEFA Champions League" />
              <OddsCard title=" UEFA Champions League" />
              <OddsCard title=" UEFA Champions League" />
              <OddsCard title=" UEFA Champions League" />
            </div>
          </section>
          {/* Champions league section */}
          {/* <section className="space-y-2">
            <h2 className="text-lg md:text-2xl font-medium">
              Champions League
            </h2>
            <div className="flex gap-2 overflow-x-scroll scrollbar-hidden">
              <OddsCard title=" UEFA Champions League" />
              <OddsCard title=" UEFA Champions League" />
              <OddsCard title=" UEFA Champions League" />
              <OddsCard title=" UEFA Champions League" />
              <OddsCard title=" UEFA Champions League" />
              <OddsCard title=" UEFA Champions League" />
              <OddsCard title=" UEFA Champions League" />
              <OddsCard title=" UEFA Champions League" />
              <OddsCard title=" UEFA Champions League" />
            </div>
          </section> */}

          {/* Virtual games section */}
          <section className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg md:text-2xl font-medium">Virtual Games</h2>
              <Link to="/virtual" className="!w-[unset] btn-main px-4">
                See all
              </Link>
            </div>
            <div className="flex gap-4 overflow-x-scroll scrollbar-hidden snap-x ">
              <img
                src="/virtual1.png"
                alt="Virtual Games"
                className="transition-transform duration-300 ease-in-out lg:hover:scale-110 cursor-pointer snap-start snap-normal"
              />
              <img
                src="/virtual2.png"
                alt="Virtual Games"
                className="transition-transform duration-300 ease-in-out lg:hover:scale-110 cursor-pointer snap-start snap-normal"
              />
              <img
                src="/virtual3.png"
                alt="Virtual Games"
                className="transition-transform duration-300 ease-in-out lg:hover:scale-110 cursor-pointer snap-start snap-normal"
              />
              <img
                src="/virtual4.png"
                alt="Virtual Games"
                className="transition-transform duration-300 ease-in-out lg:hover:scale-110 cursor-pointer snap-start snap-normal"
              />
            </div>
          </section>
        </div>

        <aside className="hidden lg:block basis-1/5 sticky top-0 h-fit bg-brand-bgDark/50 rounded-md space-y-6">
          <form className="p-3 space-y-2">
            <TextInput placeholder="Enter code" label="Booking code" />
            <button className="btn">Load</button>
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
            <button className="btn">Enter</button>
          </form>
        </aside>
      </div>

      {/* Modal for login */}
      {loginModalOpen && (
        <ModalContainer toggleModal={toggleLoginModal} hideHeader={true}>
          <div className="mx-auto sm:max-w-sm space-y-4 p-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center">
              Sign in
            </h2>
            <form className="space-y-4">
              <TextInput placeholder="Enter phone/email" label="Phone/email" />
              <TextInput
                placeholder="Enter password"
                label="Password"
                type="password"
              />
              <div className="flex items-center justify-between -mt-2">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input type="checkbox" className="cursor-pointer" />
                  Remember me{" "}
                  <span className="hidden md:inline">for 30 days</span>
                </label>

                <button
                  className="text-brand-green font-medium"
                  onClick={toggleForgotPasswordModal}
                  type="button"
                >
                  Forgot password?
                </button>
              </div>
              <button type="submit" className="btn-main mt-2">
                Sign In
              </button>

              <p
                className="text-brand-green/80 font-medium cursor-pointer text-center"
                onClick={() => {
                  toggleLoginModal();
                  toggleSignupModal();
                }}
              >
                Dont have an account? Sign up
              </p>
            </form>
          </div>
        </ModalContainer>
      )}

      {/* Modal for forgot password */}
      {forgotPasswordModalOpen && (
        <ModalContainer
          toggleModal={toggleForgotPasswordModal}
          title="Forgot Password"
          hideHeader={true}
        >
          <div className="mx-auto sm:max-w-sm space-y-4 p-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center">
              Forgot Password
            </h2>
            <form className="space-y-4">
              <TextInput placeholder="Enter phone/email" label="Phone/email" />
              <button className="btn-main mt-2">Send Reset Link</button>
            </form>
          </div>
        </ModalContainer>
      )}

      {/* Modal for sign up */}
      {signupModalOpen && (
        <ModalContainer toggleModal={toggleSignupModal} hideHeader={true}>
          <div className="mx-auto sm:max-w-sm space-y-4 p-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center">
              Sign Up
            </h2>
            <form className="space-y-4">
              <TextInput placeholder="Enter phone/email" label="Phone/email" />
              <TextInput
                placeholder="Enter password"
                label="Password"
                type="password"
              />
              <button type="submit" className="btn-main mt-2">
                Create Account
              </button>
              <p
                className="text-brand-green/80 font-medium cursor-pointer text-center"
                onClick={() => {
                  toggleLoginModal();
                  toggleSignupModal();
                }}
              >
                Have an account? Sign in
              </p>
            </form>
          </div>
        </ModalContainer>
      )}
    </div>
  );
};

export default Home;
