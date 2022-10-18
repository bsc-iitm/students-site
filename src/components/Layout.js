import NavigationDefault from "./nav/Default";
import Footer from "./footer/Footer";
import "bootstrap";

const Layout = ({ children }) => {
  return (
    <main className="bg-color">
      <NavigationDefault />
      <div style={{ "minHeight": "100vh" }}>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;