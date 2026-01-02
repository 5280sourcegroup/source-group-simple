import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import QuoteFormSection from "@/components/QuoteFormSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <div id="why-us">
          <WhyChooseUsSection />
        </div>
        <div id="process">
          <ProcessSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <QuoteFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
