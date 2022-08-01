import { FaGoogle, FaFacebookF } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold text-white">
              <span className="text-blue-600">Konna</span>
              <span className="text-yellow-500">dex</span>
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-600 mb-2">Login</h2>
              <div className="flex space-x-4 justify-center my-2">
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 m"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 m"
                >
                  <FaGoogle className="text-sm" />
                </a>
              </div>
              <p className="text-gray-400 my-3">
                or use your email address and password
              </p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-200 w-64 p-3 flex items-center mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-200 outline-none text-sm"
                  ></input>
                </div>
                <div className="bg-gray-200 w-64 p-3 flex items-center mb-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-200 outline-none text-sm"
                  ></input>
                </div>
                <a className="border-2 border-blue-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-600 cursor-pointer">
                  Login
                </a>
              </div>
            </div>
          </div>
          <div className="w-2/5 bg-blue-600  text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-xl font-bold mb-2">
              Welcome to Konna<span className="text-yellow-400">dex</span>
            </h2>
            <p className="mb-2 font-semibold">
              The leading crypto tech company in Africa
            </p>
            <a className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-600 cursor-pointer">
              Sign Up
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
