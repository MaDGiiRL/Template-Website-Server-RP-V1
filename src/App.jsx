import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Rules from "./components/Rules";
import ApplyStaff from "./components/ApplyStaff";
import Sponsors from "./components/Sponsors";
import Staff from "./components/Staff";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <main className="container mx-auto px-6 space-y-20 md:space-y-28">
        <About />
        <Rules />
        <section id="diventa-staff" className="section">
          <ApplyStaff />
        </section>
        <section id="sponsor" className="section">
          <Sponsors />
        </section>
        <section id="staff" className="section">
          <Staff />
        </section>
      </main>
      <div style={{marginBottom: 10}}>
        <Footer />
      </div>
    </div>
  );
}
