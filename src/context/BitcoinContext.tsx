import React, { createContext, useContext, useCallback } from 'react';
import { WebLNProvider } from '@getalby/web-sdk';

interface BitcoinContextType {
  payInvoice: (invoice: string) => Promise<void>;
}

const BitcoinContext = createContext<BitcoinContextType>({
  payInvoice: async () => {},
});

export function BitcoinProvider({ children }: { children: React.ReactNode }) {
  const payInvoice = useCallback(async (invoice: string) => {
    try {
      const webln = await WebLNProvider.init();
      await webln.enable();
      await webln.sendPayment(invoice);
    } catch (error) {
      console.error('Error paying invoice:', error);
      throw error;
    }
  }, []);

  return (
    <BitcoinContext.Provider value={{ payInvoice }}>
      {children}
    </BitcoinContext.Provider>
  );
}

export function useBitcoin() {
  return useContext(BitcoinContext);
}