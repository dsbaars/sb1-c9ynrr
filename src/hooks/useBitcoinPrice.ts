import { useState, useEffect } from 'react';

export function useBitcoinPrice() {
  const [btcPrice, setBtcPrice] = useState<number | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch('https://api.coinbase.com/v2/prices/BTC-USD/spot');
        const data = await response.json();
        setBtcPrice(parseFloat(data.data.amount));
      } catch (error) {
        console.error('Error fetching BTC price:', error);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return btcPrice;
}