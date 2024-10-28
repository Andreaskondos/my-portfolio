import "@/global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Analytics } from "./components/analytics";

export const metadata = {
  title: {
    default: "andreas-kontos.com",
    template: "%s | andreas-kontos.com",
  },
  description:
    "A versatile full-stack developer who successfully transitioned from a Chief Engineer in the Navy, bringing a unique blend of technical expertise, adaptability, and problem-solving skills to software development.",
  openGraph: {
    title: "andreas-kontos.com",
    description:
      "A versatile full-stack developer who successfully transitioned from a Chief Engineer in the Navy, bringing a unique blend of technical expertise, adaptability, and problem-solving skills to software development.",
    url: "https://andreas-kontos.vercel.app",
    siteName: "andreas-kontos.vercel.app",
    images: [
      {
        url: "https://andreas-kontos.vercel.app/og.png",
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

const zenDots = LocalFont({
  src: "../public/fonts/ZenDots-Regular.ttf",
  variable: "--font-zendots",
});

const blackOps = LocalFont({
  src: "../public/fonts/BlackOpsOne-Regular.ttf",
  variable: "--font-blackops",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={[
        inter.variable,
        calSans.variable,
        zenDots.variable,
        blackOps.variable,
      ].join(" ")}
    >
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
