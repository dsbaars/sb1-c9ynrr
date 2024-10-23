import React from 'react';
import { useBitcoinPrice } from '../hooks/useBitcoinPrice';

interface PriceDisplayProps {
  usdPrice: string;
  size?: 'sm' | 'lg';
}

function PriceDisplay({ usdPrice, size = 'sm' }: PriceDisplayProps) {
  const btcPrice = useBitcoinPrice();
  const numericPrice = parseFloat(usdPrice.replace(/[^0-9.]/g, ''));
  
  const calculateSats = () => {
    if (!btcPrice) return null;
    return Math.round((numericPrice / btcPrice) * 100000000);
  };

  const sats = calculateSats();
  const textSizeClass = size === 'lg' ? 'text-2xl' : 'text-base';

  return (
    <div className="space-y-1">
      <div className="flex items-center">
        <span className={`font-bold ${textSizeClass}`}>{usdPrice}</span>
        <span className="text-gray-600 ml-2">/night</span>
      </div>
      {sats && (
        <div className="text-orange-500 font-medium">
          <span className={size === 'lg' ? 'text-lg' : 'text-sm'}>
            {sats.toLocaleString()} sats
          </span>
        </div>
      )}
    </div>
  );
}

export default PriceDisplay;