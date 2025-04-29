import img3 from '../assets/channels4_profile.jpg';
import img4 from '../assets/download.png';

export const Signup = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-green-500">
        <div className="h-[35rem] w-96 rounded-lg flex flex-col items-center justify-center gap-4 bg-white">
          <div>
            <h1 className="text-3xl font-bold">Sign-UP</h1>
          </div>

          <form className="flex flex-col items-center gap-4 mt-4 w-full">
            <div className="flex flex-col">
              <label htmlFor="email">Email-ID</label>
              <input 
                className="border w-64 pl-2 rounded" 
                type="text" 
                name="email" 
                id="email" 
                placeholder="Enter Email"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="username">Username</label>
              <input 
                className="border w-64 pl-2 rounded" 
                type="text" 
                name="username" 
                id="username" 
                placeholder="Enter Username"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input 
                className="border w-64 pl-2 rounded" 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Enter Password"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="cpassword">Confirm Password</label>
              <input 
                className="border w-64 pl-2 rounded" 
                type="password" 
                name="cpassword" 
                id="cpassword" 
                placeholder="Enter Password"
              />
            </div>

            <div>
              <button 
                className="mt-8 w-48 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl" 
                type="submit"
              >
                Sign-Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
