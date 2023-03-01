import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ preview, children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
