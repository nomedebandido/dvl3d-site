import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DVL3D | Design e Decoração",
    template: "%s | DVL3D",
  },

  description:
    "Decoração, peças religiosas, produtos pet e luminárias produzidas pela DVL3D com personalidade e atenção aos detalhes.",

  keywords: [
    "DVL3D",
    "decoração",
    "decoração religiosa",
    "Nossa Senhora",
    "Sagrada Família",
    "luminárias",
    "decoração pet",
    "presentes personalizados",
    "Espírito Santo",
  ],

  authors: [{ name: "DVL3D" }],
  creator: "DVL3D",

  openGraph: {
    title: "DVL3D | Design e Decoração",
    description:
      "Objetos para decorar, iluminar e transformar ambientes.",
    siteName: "DVL3D",
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DVL3D | Design e Decoração",
    description:
      "Objetos para decorar, iluminar e transformar ambientes.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}