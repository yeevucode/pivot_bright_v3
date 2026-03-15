import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoWeServe from "@/components/WhoWeServe";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import EngagementModels from "@/components/EngagementModels";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <WhoWeServe />
        <Services />
        <EngagementModels />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
