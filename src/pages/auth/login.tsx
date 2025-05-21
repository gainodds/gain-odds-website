import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "@/components/shared/TextInput";
import { useLoginMutation } from "../../services/authApi";

const LoginPage = () => {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await login(credentials).unwrap();

      await navigate("/");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    } catch (err: any) {
      // setErrorMessage(err.data.message);
      // setTimeout(() => {
      //   setErrorMessage("");
      // }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center mt-5 gap-5 p-3 md:ml-5">
      <div className="flex flex-col items-center gap-1 text-center">
        <img
          src="/logo-icon.svg"
          alt="comfortry logo icon"
          className="size-10"
        />
        <h2 className="text-3xl font-bold">Welcome back to comfortry</h2>
        <p className=" text-[#505050] dark:text-gray-400 max-w-md">
          Login to your dashboard
        </p>
      </div>
      <form
        action=""
        className="w-full max-w-md space-y-4"
        onSubmit={handleSubmit}
      >
        <TextInput
          name="email"
          type="email"
          placeholder="Enter your email address"
          value={credentials.email}
          onChange={handleChange}
        />
        <div>
          <TextInput
            name="password"
            type="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={handleChange}
          />
          <div className="flex justify-between">
            <label
              htmlFor="remember_me"
              className="flex items-center gap-1 cursor-pointer"
            >
              <input
                type="checkbox"
                name="remember_me"
                id="remember_me"
                className="bg-white text-white"
              />
              Remember me
            </label>

            <Link to="/auth/forgot-password" className="text-brand-blue">
              Forgot passowrd?
            </Link>
          </div>
        </div>
        <button type="submit" className="btn w-full">
          {isLoading ? "Signing In" : "Sign In"}
        </button>
      </form>
      <p>
        Don’t have an account?{" "}
        <Link to="/auth/sign-up" className="text-brand-blue">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
