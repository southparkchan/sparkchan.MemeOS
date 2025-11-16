import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function MemeOSUI() {
  const [memeText, setMemeText] = useState("");
  const [output, setOutput] = useState(null);

  const generateMeme = () => {
    setOutput({ text: memeText });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8 gap-6">
      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold tracking-tight"
      >
        MemeOS Playground
      </motion.h1>

      {/* INPUT CARD */}
      <Card className="w-full max-w-xl bg-zinc-900 border-zinc-700 rounded-2xl shadow-xl">
        <CardContent className="p-6 flex flex-col gap-4">
          <p className="text-sm text-zinc-300">Enter meme input</p>
          <Input
            className="bg-zinc-800 border-zinc-700 text-white"
            placeholder="Type anything..."
            value={memeText}
            onChange={(e) => setMemeText(e.target.value)}
          />
          <Button
            onClick={generateMeme}
            className="bg-purple-600 hover:bg-purple-700 rounded-xl"
          >
            Generate
          </Button>
        </CardContent>
      </Card>

      {/* OUTPUT */}
      {output && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-xl bg-zinc-900 border border-zinc-700 p-6 rounded-2xl shadow-xl"
        >
          <p className="text-zinc-400 text-sm mb-2">Output</p>
          <p className="text-white text-lg">{output.text}</p>
        </motion.div>
      )}

      {/* FOOTER */}
      <p className="text-xs text-zinc-500 mt-10">MemeOS v0.1 — Powered by Sparkchan</p>
    </div>
  );
}
