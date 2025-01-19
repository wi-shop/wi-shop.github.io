import "./globals.css";
import Footer from "./components/common/footer";
import Navbar from "./components/common/navbar";

export const metadata = {
  title: "Workspace Intelligence",
  description: "Offering a suite of tools to help you upgrade your workspace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
