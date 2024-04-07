import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
function Layout() {
  return (
    <HelmetProvider>
      <Header />
      <main className="wrapper bg-primary">
        <Outlet />
      </main>
      <Footer />
    </HelmetProvider>
  );
}
export default Layout;
