import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-16 overflow-hidden">

      <Header />

      <main className="bg-white py-4">
        {children}
      </main>

      <Footer />
    </div>
  );
}
