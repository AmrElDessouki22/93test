import '@/app/globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4">{children}</main>
      <Footer />
    </div>
  );
}
