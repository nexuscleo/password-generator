import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Gerador de Senhas | SkyMint & Graphite",
  description: "Gerador de senhas seguro e minimalista em tom SkyMint e Graphite",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="bg-[#17181c] text-slate-100 font-sans antialiased selection:bg-[#b8f7e4] selection:text-[#25272c]">
        {children}
      </body>
    </html>
  );
}
