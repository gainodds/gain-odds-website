import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../../components/shared/TextInput";
// import { useSignupMutation } from "../../services/userApi";

const SignupPage = () => {
  const navigate = useNavigate();
  // const [signup, { isLoading }] = useSignupMutation();
  const [payload, setPayload] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  // const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // await signup(payload).unwrap();

      await navigate("/auth/login");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    } catch (err: any) {
      // setErrorMessage(err.data.message);
      // setTimeout(() => {
      //   setErrorMessage("");
      // }, 2000);
    }
  };
  return (
    <div className="flex flex-col items-center my-4 gap-5 p-3 md:ml-5">
      <div className="flex flex-col items-center gap-1 text-center">
        <img
          src="/logo-icon.svg"
          alt="comfortry logo icon"
          className="size-10"
        />
        <h2 className="text-3xl font-bold">Welcome to comfortry</h2>
        <p className=" text-[#505050] dark:text-gray-400 max-w-md">
          We track and optimize caregiver performance with real-time insights
          for improved client care.
        </p>
      </div>
      <form
        action=""
        className="w-full max-w-md space-y-4"
        onSubmit={handleSubmit}
      >
        <TextInput
          name="fullname"
          placeholder="Enter your full name"
          value={payload.fullname}
          onChange={handleChange}
        />
        <TextInput
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={payload.email}
          onChange={handleChange}
        />
        <TextInput
          type="password"
          name="password"
          placeholder="Create a strong password"
          value={payload.password}
          onChange={handleChange}
        />
        <button type="submit" className="btn w-full">
          Sign Up
        </button>
      </form>
      <p>
        Have an account?{" "}
        <Link to="/auth/login" className="text-brand-blue">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
