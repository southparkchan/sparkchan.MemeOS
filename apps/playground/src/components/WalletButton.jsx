"use client";
import { useWallet } from "@solana/wallet-adapter-react";

export default function WalletButton() {
  const { connected, connect, disconnect, publicKey } = useWallet();

  return (
    <button
      onClick={() => (connected ? disconnect() : connect())}
      className="px-4 py-2 bg-purple-600 text-white rounded-lg"
    >
      {connected ? `Disconnect (${publicKey.toString().slice(0,4)}...)` : "Connect Wallet"}
    </button>
  );
}
