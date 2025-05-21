import { Link } from "react-router-dom";
import TextInput from "../../components/shared/TextInput";

const ForgotPassowrdPage = () => {
  return (
    <div className="flex flex-col items-center mt-8 gap-8 p-3 md:ml-5">
      <div className="flex flex-col items-center gap-1 text-center">
        <img
          src="/logo-icon.svg"
          alt="comfortry logo icon"
          className="size-10"
        />
        <h2 className="text-3xl font-bold">Forgot Password</h2>
        <p className=" text-[#505050] dark:text-gray-400 max-w-md">
          Please provide your email address and we’ll send you a code to reset
          your password.
        </p>
      </div>
      <form action="" className="w-full max-w-md space-y-4">
        <TextInput
          name="Email address"
          placeholder="Enter your email address"
        />
        <button type="submit" className="btn w-full">
          Reset Password
        </button>
      </form>
      <p>
        Remember passoword?{" "}
        <Link to="/auth/login" className="text-brand-blue">
          Login
        </Link>
      </p>
    </div>
  );
};

export default ForgotPassowrdPage;
