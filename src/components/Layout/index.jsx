import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="flex-grow bg-zinc-200 py-8">{children}</main>
      <Footer />
    </div>
  );
}
