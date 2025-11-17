export const metadata = {
  title: "MemeOS",
  description: "Next generation Solana meme operating system"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
