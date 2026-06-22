import ProblemSection from "../components/CaseStudy/ProblemSection";
import Hero from "../components/Hero/Hero";
import PilotSection from "../components/Pilot/PilotSection";
import ProcessSection from "../components/Process/ProcessSection";
import ServicesMarqueeSection from "../components/Services/ServicesMarqueeSection";
import ValuePropsSection from "../components/ValueProps/ValuePropsSection";
import WorkerBenefitsSection from "../components/WorkerBenefits/WorkerBenefitsSection";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <ValuePropsSection />
      <ProblemSection />
      <ProcessSection />
      <WorkerBenefitsSection />
      <ServicesMarqueeSection />
      <PilotSection />
      <Footer />
    </>
  );
}
