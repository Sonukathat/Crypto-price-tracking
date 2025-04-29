import img3 from '../assets/channels4_profile.jpg';
import img4 from '../assets/download.png';

export const Login = () => {

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-green-500">
        <div className="h-[32rem] w-72 rounded-lg flex flex-col items-center justify-center gap-6 bg-white">
          <div>
            <h1 className="text-3xl font-bold">Login</h1>
          </div>

          <form className="flex flex-col items-center gap-6">
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email-ID</label>
              <input 
                className="border w-64 pl-2 rounded" 
                type="text" 
                name="email" 
                id="email" 
                placeholder="Enter Email"
                
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="password">Password</label>
              <input 
                className="border w-64 pl-2 rounded" 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Enter Password"
              />
            </div>

            <div>
              <button 
                className="w-48 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl" 
                type="submit"
              >
                Login
              </button>
            </div>
          </form>

          <div>
            <p>OR</p>
          </div>

          <div className="flex gap-4">
            <img className="h-10 w-10" src={img3} alt="google" />
            <img className="h-8 w-8 mt-1" src={img4} alt="facebook" />
          </div>
        </div>
      </div>
    </>
  );
};
