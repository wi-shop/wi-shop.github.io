import "./globals.css";
import Footer from "./components/common/footer";
import Navbar from "./components/common/navbar";
import { ThemeProvider } from "./context/ThemeProvider";

export const metadata = {
  title: "Workspace Intelligence",
  description: "Offering a suite of tools to help you upgrade your workspace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="google-adsense-account" content="ca-pub-6366457075080576"/>
        <link rel="icon" href="/wi.svg" />
      </head>
      <body className="dark:bg-black dark:text-white">
        <ThemeProvider>
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
