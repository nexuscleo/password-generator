import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Gerador de Senhas | Neumorphism Monocromático",
  description: "Gerador de senhas seguro em estilo Neumorphism elegante e monocromático",
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
      <body className="bg-[#16171a] text-slate-100 font-sans antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
