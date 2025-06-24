import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/Sidebar";
import "./globals.css";
export const metadata = {
  title: "EngiGrow",
  description: "Connect Create Colaberate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex flex-1">
          <aside className="w-64 bg-gray-100 dark:bg-gray-800 hidden md:block md:m-4">
            <SideBar />
          </aside>
          <main className="flex-1 m-0 md:m-4">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
