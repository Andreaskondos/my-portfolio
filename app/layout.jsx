import "@/global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Analytics } from "./components/analytics";

export const metadata = {
  title: {
    default: "andreas-kontos.com",
    template: "%s | andreas-kontos.com",
  },
  description: "An aspiring full-stack developer",
  openGraph: {
    title: "andreas-kontos.com",
    description: "An aspiring full-stack developer",
    url: "https://andreas-kontos.vercel.app",
    siteName: "andreas-kontos.vercel.app",
    images: [
      {
        url: "https://chronark.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-purple-950 ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
