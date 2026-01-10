import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SessionWrapper from "../components/SessionWrapper";
// import Dashboard from "./components/Dashboard";

export const metadata = {
  title: "RaiseNest - Fund your projects",
  description: "This website is for crowdfunding platform for Students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white">
          <SessionWrapper>
          
          <Navbar/>
          <div className="min-h-screen  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white">
        {children}
        
          </div>
        <Footer/>
        </SessionWrapper>
      </body>
    </html>
  );
}
