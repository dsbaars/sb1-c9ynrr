import React, { createContext, useContext, useState, useCallback } from 'react';
import { getPublicKey, nip19 } from 'nostr-tools';

interface NostrContextType {
  publicKey: string | null;
  connect: () => Promise<void>;
}

const NostrContext = createContext<NostrContextType>({
  publicKey: null,
  connect: async () => {},
});

export function NostrProvider({ children }: { children: React.ReactNode }) {
  const [publicKey, setPublicKey] = useState<string | null>(null);

  const connect = useCallback(async () => {
    if (typeof window.nostr === 'undefined') {
      alert('Please install a Nostr extension like nos2x or Alby');
      return;
    }

    try {
      const pubkey = await window.nostr.getPublicKey();
      setPublicKey(nip19.npubEncode(pubkey));
    } catch (error) {
      console.error('Error connecting to Nostr:', error);
    }
  }, []);

  return (
    <NostrContext.Provider value={{ publicKey, connect }}>
      {children}
    </NostrContext.Provider>
  );
}

export function useNostr() {
  return useContext(NostrContext);
}