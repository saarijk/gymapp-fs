import React, { useState } from "react";

type Props = {};

function Login({}: Props) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // logic to handle username and pw after input
  };

  return (
    <>
      <div className="flex items-center justify-center align-center h-[30vh] w-full">
        <div className=" w-1/2 h-full flex">
          <form
            onSubmit={handleSubmit}
            className="w-5/6 h-[400px] mx-auto align-center flex flex-col items-center justify-center border-slate-600 border-[1px]"
          >
            <div className="text-center">
              <h2 className="text-2xl m-6">Welcome Back</h2>
            </div>
            <div className="w-full mb-3 text-center flex justify-center">
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  className="border-[1px] border-t-transparent border-l-transparent border-r-transparent focus:rounded-md border-b-slate-300 ml-2 focus:border-[1px] focus:border-blue-300 focus:outline-none"
                />
              </label>
            </div>
            <div className="w-full mb-3 text-center flex justify-center">
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="border-[1px] border-t-transparent border-l-transparent border-r-transparent focus:rounded-md border-b-slate-300 ml-2 focus:border-[1px] focus:border-blue-300 focus:outline-none"
                />
              </label>
            </div>
            <div className="flex justify-center items-center m-3">
              <button
                className="flex items-center mt-4 px-4 pt-1 pb-2 border-blue-300 border-[1px] rounded-md hover:bg-blue-200 transition-all duration-300"
                type="submit"
              >
                Sign In
              </button>
            </div>
            <div>
              {username ? (
                <>
                  <p className="text-sm">Username is "{username}"</p>
                </>
              ) : (
                <></>
              )}
              {password ? (
                <>
                  <p className="text-sm">Password is "{password}"</p>
                </>
              ) : (
                <></>
              )}
            </div>
          </form>
        </div>
        <div className="h-[400px] w-1/2 flex flex-col mt-[13px]">
          <div className="w-5/6 h-full mx-auto align-center flex flex-col items-center justify-center border-slate-600 border-[1px]">
            <h2 className="text-2xl text-center">New here?</h2>
            <button className="p-5 bg-blue-400 w-1/2 text-center mx-auto mt-6 rounded-lg hover:bg-blue-200 transition-all duration-300">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
