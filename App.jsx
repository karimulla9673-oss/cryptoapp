import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./components/Coin";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");

 useEffect(() => {
  Axios.get("https://api.coingecko.com/api/v3/coins/markets", {
    params: {
      vs_currency: "usd",          // required
      order: "market_cap_desc",    // sort by market cap
      per_page: 50,                // number of coins
      page: 1,                     // first page
      sparkline: false,
    },
  }).then((response) => {
    setListOfCoins(response.data);
  }).catch((error) => {
    console.error("Error fetching data:", error);
  });
}, []);


  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="App">
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="Bitcoin..."
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        />
      </div>
      <div className="cryptoDisplay">
        {filteredCoins.map((coin) => {
          return (
           <Coin
  key={coin.id}
  name={coin.name}
  icon={coin.image}            // CoinGecko uses "image"
  price={coin.current_price}   // CoinGecko uses "current_price"
  symbol={coin.symbol}
/>

        
          );
        })}
      </div>
    </div>
  );
}

export default App;