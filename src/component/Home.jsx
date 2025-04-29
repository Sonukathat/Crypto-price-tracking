import img1 from '../assets/original_imagesoriginal_imageshttpsg.foolcdn.c.width-880_SfbkM9V.jpg';

export const Home = () => {

    const handleStart = () => {
       alert("Please Login Or Sign-Up Account");
    };
    
    return(
        <>
          <div id='home' className="flex justify-evenly flex-wrap bg-gradient-to-r from-yellow-500 to-amber-600 pb-4 md:py-16 xl:py-32">
            <div className='my-8 xl:mt-16'>
              <p className='text-4xl text-center font-bold xl:text-6xl'>Explore Crypto Daily</p>
              <p className='font-medium text-sm text-center mt-4 sm:text-base lg:text-lg'>Crypto Currency Is A Form Of Virtual Currency</p>
              <div className='flex justify-center gap-4 mt-8'>
                <button
                   className="relative overflow-hidden rounded-4xl w-28 h-8 xl:w-44 xl:h-12 bg-white
                   bg-gradient-to-r from-white to-amber-500 
                   bg-[length:0%_100%] hover:bg-[length:100%_100%] 
                   bg-left bg-no-repeat 
                   transition-all duration-300 ease-out">
                   Get Started
                </button>
                <button
                   className="relative overflow-hidden rounded-4xl w-28 h-8 xl:w-44 xl:h-12 bg-white
                   bg-gradient-to-l from-white to-amber-500 
                   bg-[length:0%_100%] hover:bg-[length:100%_100%] 
                   bg-right bg-no-repeat 
                   transition-all duration-300 ease-out">
                   Buy Coin
                </button>
              </div>
            </div>
            <div className=''>
              <img className='h-44 w-70 rounded mt-8 sm:h-40 sm:w-64 xl:w-80 xl:h-60 transition-transform duration-200 hover:scale-110' src={img1} alt='Crypto Img' />
            </div>
          </div>
        </>
    )
}