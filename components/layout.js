import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ preview, children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
