import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="flex-grow bg-zinc-200 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
