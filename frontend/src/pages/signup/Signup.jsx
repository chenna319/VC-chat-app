import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Singup
          <span className="text-blue-500"> Chat App</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Full Name</span>
            </label>
            <input
              placeholder="Enter Full Name"
              type="text"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              placeholder="Enter Username"
              type="text"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="flex flex-col">
            <label className="label">
              <span className="text-base label-text  text-white">Password</span>
            </label>
            <input
              placeholder="Enter Password"
              type="password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="flex flex-col">
            <label className="label">
              <span className="text-base label-text  text-white">Confirm Password</span>
            </label>
            <input
              placeholder="Confirm Password"
              type="password"
              className="w-full input input-bordered h-10"
            />
          </div>
          {/* Gender checkbox */}
          <GenderCheckbox/>
          <a
            href="#"
            className="text-white text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
