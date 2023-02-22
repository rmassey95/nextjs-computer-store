import Navbar from "./navbar";

const Layout = ({ preview, children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
