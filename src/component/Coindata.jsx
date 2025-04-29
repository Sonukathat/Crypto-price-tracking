import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export const Coindata = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [loadingCoin, setLoadingCoin] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const cryptoFun = async () => {
    try {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1'
      );
      const data = await res.json();
      setCryptoData(data);
    } catch (error) {
      console.log('Fetching Error:', error);
    }
  };

  const fetchChartData = async (coinId) => {
    try {
      setLoadingCoin(coinId);
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`
      );
      const data = await res.json();
      
      const prices = data.prices.map(([timestamp, price]) => ({
        time: new Date(timestamp).toLocaleDateString(),
        price,
      }));
      setChartData({
        labels: prices.map((p) => p.time),
        datasets: [
          {
            label: `${coinId.toUpperCase()} - Last 7 Days`,
            data: prices.map((p) => p.price),
            borderColor: 'rgba(75,192,192,1)',
            fill: false,
          },
        ],
      });
      setSelectedCoin(coinId);
    } catch (error) {
      console.log('Chart Fetching Error:', error);
    } finally {
      setLoadingCoin(null);
    }
  };

  useEffect(() => {
    cryptoFun();
  }, []);

  
  const filteredCoins = cryptoData.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id='coins' className='flex flex-col items-center gap-4 py-16'>
      <input
        type='text'
        placeholder='Search coins...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='border px-4 py-2 rounded w-1/2 mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400'
      />

      {(showAll ? filteredCoins : filteredCoins.slice(0, 10)).map((coin) => (
        <div
          key={coin.id}
          className='flex flex-col gap-4 items-center border py-4 rounded shadow-md sm:hover:shadow-lg hover:scale-105 transition-all duration-100'
        >
          <div className='flex w-72 justify-around sm:w-[35rem] md:w-[40rem] lg:w-[50rem]'>
            <img src={coin.image} alt={coin.name} className='h-8 w-8' />
            <p className='font-medium text-sm sm:text-base lg:text-lg'>{coin.name}</p>
            <p className='text-green-600'>${coin.current_price}</p>
            <p
              className='text-blue-500 cursor-pointer text-sm underline'
              onClick={() =>
                selectedCoin === coin.id
                  ? setSelectedCoin(null)
                  : fetchChartData(coin.id)
              }
            >
              {selectedCoin === coin.id ? 'hide chart' : 'chart'}
            </p>
          </div>

          {selectedCoin === coin.id && (
            <div className='w-full mt-4 bg-white p-1 shadow'>
              {loadingCoin === coin.id ? (
                <p>Loading chart...</p>
              ) : (
                chartData && <Line data={chartData} />
              )}
            </div>
          )}
        </div>
      ))}

      <button
        onClick={() => setShowAll(!showAll)}
        className='mt-8 px-6 py-2 border-2 hover:shadow-[0_0px_15px_rgba(255,179,0,1)] rounded transition-all duration-300'
      >
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};
