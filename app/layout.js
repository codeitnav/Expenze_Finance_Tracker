import { Josefin_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Expenze",
  description: "Personal Finance Tracker app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo_light.png" sizes="any" />
        </head>
        <body
  className={`bg-[#EEE5DA] text-foreground transition-colors duration-300 ${josefinSans.variable} ${roboto.variable} antialiased`}
>

          <Header />
          <main className="bg-[#EEE5DA] min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-[#EEE5DA] py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with 💗 by Nav</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
