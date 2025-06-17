import ModalContainer from "@/components/shared/ModalContainer";
import TextInput from "@/components/shared/TextInput";
import SportsAsidebar from "@/components/ui/SportsAsidebar";
import OddsCard from "@/components/ui/OddsCard";
import { useState } from "react";
import { BiBell } from "react-icons/bi";

const SportsPage = () => {
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
    <div className="divide-x-2 divide-divide h-full overflow-y-auto flex md:min-h-screen md:overflow-hidden ">
      <SportsAsidebar />
      <div className="divide-y-2 divide-divide space-y-3 flex-1 overflow-y-auto  md:overflow-y-auto">
        <header className="p-3 fixed md:sticky top-0 bg-brand-bg z-10 w-full flex items-center justify-between gap-3 ">
          <TextInput
            type="search"
            placeholder="Search league, teams, competition"
            extraClass="w-full max-w-44 xxs:max-w-52 xs:max-w-64 sm:max-w-xs lg:max-w-xl xl:max-w-2xl"
          />
          <div className="flex items-center gap-2 sm:gap-5">
            <div className="hidden md:block bg-[#182A38] rounded-full pl-2 pr-3 py-2 cursor-pointer">
              <select
                name="language"
                id="language"
                className="bg-[#182A38] outline-none px-3"
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>
            </div>
            <button className="rounded-full bg-[#182A38] p-2 md:p-3 cursor-pointer hover:bg-[#182A38]/80 duration-300">
              <BiBell className="size-4 md:size-5" />
            </button>
            <div className="bg-brand-bgDark/50 rounded-md flex items-center gap-2 px-2 py-1.5 sm:px-3 sm:py-2">
              <button className="btn !px-4" onClick={toggleLoginModal}>
                Sign in
              </button>
            </div>
          </div>
        </header>

        <div className="p-3 flex-1 lg:basis-4/5 space-y-3 mt-20 mb-16 md:my-0 overflow-x-hidden">
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
          <section className="space-y-2">
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
          </section>
        </div>
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

export default SportsPage;
