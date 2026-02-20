import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import ProgramFlow from "./components/ProgramFlow";
import EventRegister from "./components/EventDetailsRegister";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-100">
      <Navbar />
      <HeroSection />
      <ProgramFlow />
      <EventRegister />
      <Footer />
    </main>
  );
}
