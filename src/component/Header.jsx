import img2 from '../assets/Logo.png';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate('/login');
  };

  const goSignup = () => {
    navigate('/signup');
  };


  return (
    <>
      <nav className="flex justify-around items-center h-16 bg-amber-400 shadow-[0_5px_5px_rgba(0,0,0,0.2)] top-0 sticky z-1">
        <div>
          <img className="h-12 w-12 rounded-full" src={img2} alt="Logo" />
        </div>
        <div className='hidden sm:block'>
          <ul className="flex gap-8 lg:gap-16">
            <li className='hover:text-white'><a href="#home">Home</a></li>
            <li className='hover:text-white'><a href="#coins">Coins</a></li>
            <li className='hover:text-white'><a href="#about">About</a></li>
            <li className='hover:text-white'><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="flex gap-4">
          <button 
             onClick={goLogin}
             className="relative overflow-hidden text-black border w-20 h-7 rounded xl:w-32 xl:h-10
             bg-gradient-to-r from-amber-500 to-white 
             bg-[length:0%_100%] hover:bg-[length:100%_100%] 
             bg-left bg-no-repeat 
             transition-all duration-300 ease-out">
             Log-In
          </button>

          <button
            onClick={goSignup}
              className="relative overflow-hidden text-black w-20 h-7 rounded xl:w-32 xl:h-10 bg-white
             bg-gradient-to-r from-white to-amber-500 
             bg-[length:0%_100%] hover:bg-[length:100%_100%] 
             bg-left bg-no-repeat 
             transition-all duration-300 ease-out">
              Sign-Up
          </button>

        </div>
      </nav>
    </>
  );
};
